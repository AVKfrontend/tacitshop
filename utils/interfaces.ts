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
}

export interface DataObj {
  products?: Product[];
  total?: number;
  limit?: number;
  skip?: number;
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
