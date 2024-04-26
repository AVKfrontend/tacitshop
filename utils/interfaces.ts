export interface Product {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  quantity?: number;
}

export interface DataObj {
  products?: Product[];
  total?: number;
  limit?: number;
  skip?: number;
}

export interface UserObj {
  id: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token?: string;
}
export interface ServerUserCarts {
  carts: UserCart[];
  total: number;
  skip: number;
  limit: number;
}
export interface UserCart {
  id?: number;
  products?: Product[];
}

export interface ExtendedElement extends Element {
  offsetWidth: number;
  style: CSSStyleDeclaration;
}

export interface CartInit {
  // sum: number,
  list: Array<CartItem>;
}
export interface CartItem {
  quantity: number;
  product: Product;
}

export interface Copoun {
  name?: string;
  volume: number;
}
