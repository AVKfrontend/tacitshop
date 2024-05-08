import { UseFetchOptions } from "nuxt/app";
import {
  DataObj,
  UserObj,
  ServerUserCarts,
  UserCart,
  Product,
} from "~/utils/interfaces";

export async function requestUserList(
  url: string,
  options?: UseFetchOptions<UserObj>
): Promise<UserObj | null> {
  let usefulRes: UserObj | null = null;
  try {
    usefulRes = await useFetch<UserObj>(url, options).then(
      (res) => res?.data?.value
    );
    if (!usefulRes) {
      console.log("second request User");
      usefulRes = await useFetch(url, options).then((res) => res.data.value);
    }
  } catch {
    (err: Error) => {
      errorHandler(err);
    };
  }
  return usefulRes;
}
export async function requestProductsList(
  url: string,
  options?: UseFetchOptions<DataObj | Product>
): Promise<DataObj | Product | null> {
  let usefulRes: DataObj | Product | null = null;
  try {
    usefulRes = await useFetch<DataObj | Product>(url, options).then(
      (res) => res.data.value
    );
    if (!usefulRes) {
      console.log("second request");
      usefulRes = await useFetch<DataObj | Product>(url, options).then(
        (res) => res.data.value
      );
    }
  } catch {
    (err: Error) => {
      errorHandler(err);
    };
  }
  return usefulRes;
}
function errorHandler(err: Error): void {
  console.error(err);
}
export async function requestCart(
  url: string,
  options?: UseFetchOptions<ServerUserCarts | UserCart>
) {
  let usefulRes: ServerUserCarts | UserCart | null = null;
  try {
    usefulRes = await useFetch<ServerUserCarts | UserCart>(url, options).then(
      (res) => res.data.value
    );
    if (!usefulRes) {
      console.log("second request Cart");
      usefulRes = await useFetch<ServerUserCarts | UserCart>(url, options).then(
        (res) => res.data.value
      );
    }
  } catch {
    (err: Error) => errorHandler(err);
  }
  return usefulRes;
}
