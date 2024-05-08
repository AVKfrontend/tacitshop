import { UseFetchOptions } from "nuxt/app";
import { paths } from "~/src/paths";
import { Copoun, DataObj, Product } from "~/utils/interfaces";

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
  const options: UseFetchOptions<DataObj | Product> = {
    method: "GET",
    params: {
      limit: amount,
      skip: skip,
    },
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  let productsArray: Product[] = [{ id: -1 }],
    total: number = 0;
  const usefulInfo = await requestProductsList(url, options);
  if (
    !!usefulInfo &&
    "products" in usefulInfo &&
    usefulInfo.products &&
    usefulInfo.total
  ) {
    productsArray = usefulInfo.products;
    total = usefulInfo.total;
  }
  return {
    total,
    productsArray,
  };
}

export async function getPreferenceProductsList(
  amount: number
): Promise<Product[]> {
  const runtimeConfig = useRuntimeConfig();
  const url = paths.productsPath;
  const options: UseFetchOptions<DataObj | Product> = {
    method: "GET",
    params: {
      limit: amount,
      skip: 20,
    },
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  let productsList: Product[] = [{ id: -1 }];
  const usefulInfo = await requestProductsList(url, options);
  if (!!usefulInfo && "products" in usefulInfo && usefulInfo.products) {
    productsList = usefulInfo.products;
  }
  return productsList;
}
export async function getFeaturedProductsList(
  amount: number
): Promise<Product[]> {
  const runtimeConfig = useRuntimeConfig();
  const url = paths.productsPath;
  const options: UseFetchOptions<DataObj | Product> = {
    method: "GET",
    params: {
      limit: amount,
      skip: 55,
    },
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  let productsList: Product[] = [{ id: -1 }];
  const usefulInfo = await requestProductsList(url, options);
  if (!!usefulInfo && "products" in usefulInfo && usefulInfo.products) {
    productsList = usefulInfo.products;
  }
  return productsList;
}

export async function getProduct(id: number | string): Promise<Product> {
  const runtimeConfig = useRuntimeConfig();
  const url = runtimeConfig.public.baseURL + paths.productsPath + `/${id}`;
  const options: UseFetchOptions<DataObj | Product> = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  let product: Product = { id: -1 };
  const usefulInfo = await requestProductsList(url, options);
  if (!!usefulInfo && !("products" in usefulInfo) && "id" in usefulInfo) {
    product = usefulInfo;
  }
  return product;
}

export async function getCopoun(code: string) {
  const copoun: Copoun = await new Promise((resolve) =>
    setTimeout(() => resolve({ name: code, volume: 12 }), 500)
  );
  return copoun;
}
