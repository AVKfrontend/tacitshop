import { CartInit, CartItem, Product, ServerUserCarts } from "utils/interfaces";
import { paths } from "~/src/paths";
import { UseFetchOptions } from "nuxt/app";
// const useCart: Ref<CartInit> = useState('cart')

const cartInit: CartInit = {
  list: [],
};

const _cartSum = computed(() => {
  const cart: Ref<CartInit> = useCartStorage();
  return cart.value.list.reduce((s: number, el: CartItem): number => {
    if (el.product.price) return s + el.product.price * el.quantity;
    else return 0;
  }, 0);
});
export const cartSum = computed(() => _cartSum.value.toFixed(2));

export function useCartStorage() {
  const useCart = () => useState("cart", () => cartInit);

  onMounted(() => {
    restoreCart();
    window.addEventListener("storage", syncCart);
  });
  onUnmounted(() => window.removeEventListener("storage", syncCart));

  return useCart();
}
export async function getCart(id: number) {
  const user = useUserStorage();
  const runtimeConfig = useRuntimeConfig();
  const url = paths.getCart + id;
  const options: UseFetchOptions<string> = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.value.token}`,
    },
    baseURL: runtimeConfig.public.baseURL,
  };
  const cartFromServer: ServerUserCarts = await requestCart(url, options);
  const productsList: Product[] = [];
  if (cartFromServer?.carts[0]?.products) {
    productsList.push(...cartFromServer?.carts[0]?.products);
    console.log(productsList[0]?.quantity);
  }
  return productsList;
}
export async function joinCart(productsList: Product[]) {
  if (productsList.length) {
    productsList.forEach((el) => {
      //addToCart(el.id, el.quantity); //?????????????????
    });
  }
}
export async function addToCart(
  id: number,
  quantity: number = 1
): Promise<void> {
  const cart: Ref<CartInit> = useCartStorage();
  const currentProduct = cart.value.list.find((el) => el.product.id === id);
  if (currentProduct) {
    currentProduct.quantity += quantity;
  } else {
    const newProduct: Product = await getProduct(id);
    const newItem = {
      quantity,
      product: newProduct,
    };
    cart.value.list.push(newItem);
  }
  saveCart(cart);
}

export function deleteFromCart(id: number, quantity: number): void {
  const cart: Ref<CartInit> = useCartStorage();
  const productToDelete = cart.value.list.find((el) => el.product.id === id);
  if (!productToDelete) return;
  if (productToDelete.quantity > quantity) productToDelete.quantity -= quantity;
  else cart.value.list = cart.value.list.filter((el) => el.product.id !== id);
  revisingCart(cart);
}

function saveCart(cart: Ref<CartInit>): void {
  localStorage.setItem("cart", JSON.stringify(cart.value));
}
function syncCart(e: StorageEvent): void {
  if (e.key !== "cart") return;
  const cart: Ref<CartInit> = useCartStorage();
  if (e.newValue === null) cart.value = cartInit;
  else restoreCart();
}
function restoreCart(): void {
  const _value = localStorage.getItem("cart");
  if (!_value) return;
  const cart: Ref<CartInit> = useCartStorage();
  cart.value = JSON.parse(_value);
}
function revisingCart(cart: Ref<CartInit>): void {
  const cartAmount = cart.value.list.length;
  if (cartAmount) saveCart(cart);
  else localStorage.removeItem("cart");
}
