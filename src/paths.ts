// interface Paths {
//   productsPath: string;
//   categoriesPath: string;
//   categoryPath: string;
//   productsSearch: Function;
// }

// export const paths:Paths = {
//   productsPath: '/products',
//   categoriesPath: '/products/categories',
//   categoryPath: '/products/category',
//   productsSearch(query:string):string  {return `https://dummyjson.com/products/search?q=${query}`}
// }

export const enum paths {
  productsPath = "/products",
  categoriesPath = "/products/categories",
  categoryPath = "/products/category",
  productsSearch = "https://dummyjson.com/products/search?q=",
}

// export class Paths {
//   static productsPath = "/products";
//   static categoriesPath = "/products/categories";
//   static categoryPath = "/products/category";
//   static productsSearch(query: string): string {
//     return `https://dummyjson.com/products/search?q=${query}`;
//   }
// }
