import {
  CartInit,
  CartItem,
  Product,
  ServerUserCarts,
  UserCart,
  UserObj,
} from "utils/interfaces";
import { paths } from "~/src/paths";
import { UseFetchOptions } from "nuxt/app";
import { resolve } from "path";

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
  return useCart();
}
export function useCartKeeping() {
  onMounted(() => {
    restoreCart();
    window.addEventListener("storage", syncCart);
  });
  onUnmounted(() => window.removeEventListener("storage", syncCart));
}
export async function getCart(id: number) {
  const user = useUserStorage();
  const runtimeConfig = useRuntimeConfig();
  const url = paths.getCart + id;
  const options: UseFetchOptions<ServerUserCarts | UserCart> = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.value.token}`,
    },
    baseURL: runtimeConfig.public.baseURL,
  };
  const cartFromServer: ServerUserCarts | UserCart | null = await requestCart(
    url,
    options
  );
  const productsList: Product[] = [];
  if (cartFromServer && "carts" in cartFromServer) {
    const typedCartFromServer: ServerUserCarts =
      cartFromServer as ServerUserCarts;
    if (typedCartFromServer.carts[0].products) {
      productsList.push(...typedCartFromServer.carts[0].products);
    }
  } else {
    console.log("Illegel type of server cart request");
  }
  return productsList;
}
type ProductItemForSave = { id: number; quantity: number };
export async function saveCartToServer() {
  if (!isLogin) return;
  const user: Ref<UserObj> = useUserStorage();
  const cart: Ref<CartInit> = useCartStorage();
  const productsList: ProductItemForSave[] = cart.value.list.map((el) => {
    return { id: el.product.id, quantity: el.quantity };
  });
  const runtimeConfig = useRuntimeConfig();
  const url = paths.addCart;
  const options: UseFetchOptions<ServerUserCarts | UserCart> = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.value.token}`,
    },
    baseURL: runtimeConfig.public.baseURL,
    body: JSON.stringify({
      userId: user.value.id,
      products: productsList,
    }),
  };
  const resFromServer = await requestCart(url, options);
  if (!resFromServer) {
    console.log("Can`t save cart to server");
  } else console.log("Cart saved to server");
}
export async function joinCart(productsList: Product[]) {
  let res: (value: void | PromiseLike<void>) => void = () => {};
  const promise = new Promise<void>((resolve) => (res = resolve));
  if (productsList.length) {
    productsList.forEach(async (el, indx, arr) => {
      await addToCart(el.id, el.quantity);
      if (indx == arr.length - 1) res();
    });
  } else {
    console.log("List of products is empty");
    res();
    return;
  }
  await promise;
  setTimeout(saveCartToServer, 10);
}
export function keepPrevCart(productsList: Product[]) {
  const cart: Ref<CartInit> = useCartStorage();
  cart.value = { list: [] };
  joinCart(productsList);
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

export function deleteCart(): void {
  const cart = useCartStorage();
  cart.value = { list: [] };
  localStorage.removeItem("cart");
}

function saveCart(cart: Ref<CartInit>): void {
  localStorage.setItem("cart", JSON.stringify(cart.value));
}
function syncCart(e: StorageEvent): void {
  if (e.key !== "cart") return;
  const cart: Ref<CartInit> = useCartStorage();
  if (e.newValue === null) cart.value = { list: [] };
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
