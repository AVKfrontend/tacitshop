import { UseFetchOptions } from "nuxt/app";
import { paths } from "~/src/paths";
import { Copoun, Product } from "~/utils/interfaces";

export async function getProductsList(
  category: string,
  amount: number,
  skip: number
): Promise<{ total: number; productsArray: Product[] }> {
  const runtimeConfig = useRuntimeConfig();
  const url =
    category === "All"
      ? paths.productsPath
      : `${paths.categoryPath}/${category}`;
  const options: UseFetchOptions<string> = {
    method: "GET",
    params: {
      limit: amount,
      skip: skip,
    },
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  const usefulInfo = await requestProductsList(url, options);
  return {
    total: usefulInfo.total as number,
    productsArray: usefulInfo.products as Product[],
  };
}

export async function getPreferenceProductsList(
  amount: number
): Promise<Product[]> {
  const runtimeConfig = useRuntimeConfig();
  const url = paths.productsPath;
  const options: UseFetchOptions<string> = {
    method: "GET",
    params: {
      limit: amount,
      skip: 20,
    },
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  const usefulInfo = await requestProductsList(url, options);
  return usefulInfo.products as Product[];
}
export async function getFeaturedProductsList(
  amount: number
): Promise<Product[]> {
  const runtimeConfig = useRuntimeConfig();
  const url = paths.productsPath;
  const options: UseFetchOptions<string> = {
    method: "GET",
    params: {
      limit: amount,
      skip: 55,
    },
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  const usefulInfo = await requestProductsList(url, options);
  return usefulInfo.products as Product[];
}
// export async function getProduct (id: number | string): Promise<Product> {
//   const runtimeConfig = useRuntimeConfig()
//   const url = runtimeConfig.public.baseURL + paths.productsPath + `/${id}`
//   const options = {
//     method: "GET",
//     headers: { 'Content-Type': 'application/json' },
//     mode: "cors",
//     credentials: "omit"
//   }

//   const usefulInfo = await fetch(url, options).then(res=>res.json())
//   return usefulInfo as Product
// }

export async function getProduct(id: number | string): Promise<Product> {
  const runtimeConfig = useRuntimeConfig();
  const url = runtimeConfig.public.baseURL + paths.productsPath + `/${id}`;
  const options: UseFetchOptions<string> = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const usefulInfo = await requestProductsList(url, options);
  return usefulInfo as Product;
}

export async function getCopoun(code: string) {
  const copoun = await new Promise((resolve) =>
    setTimeout(() => resolve({ name: code, volume: 12 }), 100)
  );
  return copoun as Copoun;
}
