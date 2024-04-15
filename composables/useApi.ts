import { UseFetchOptions } from "nuxt/app";
import { DataObj, UserObj, ServerUserCarts } from "~/utils/interfaces";

export async function requestProductsList(
  url: string,
  options?: UseFetchOptions<string>
): Promise<DataObj> {
  let usefulRes: DataObj = (await useFetch(url, options)
    .then((res) => res.data.value)
    .catch(errorHandler)) as DataObj;
  if (!usefulRes) {
    console.log("second request");
    usefulRes = (await useFetch(url, options)
      .then((res) => res.data.value)
      .catch(errorHandler)) as DataObj;
  }
  return usefulRes;
}
function errorHandler(err: Error): void {
  console.error(err);
}
export async function requestUserList(
  url: string,
  options?: UseFetchOptions<string>
): Promise<UserObj> {
  let usefulRes: UserObj = (await useFetch(url, options)
    .then((res) => res?.data?.value)
    .catch(errorHandler)) as unknown as UserObj;
  if (!usefulRes) {
    console.log("second request User");
    usefulRes = (await useFetch(url, options)
      .then((res) => res.data.value)
      .catch(errorHandler)) as unknown as UserObj;
  }
  return usefulRes || null;
}
export async function requestCart(
  url: string,
  options?: UseFetchOptions<string>
) {
  let usefulRes = (await useFetch(url, options)
    .then((res) => res.data.value)
    .catch(errorHandler)) as unknown as ServerUserCarts;
  if (!usefulRes) {
    console.log("second request User");
    usefulRes = (await useFetch(url, options)
      .then((res) => res.data.value)
      .catch(errorHandler)) as unknown as ServerUserCarts;
  }
  return usefulRes;
}
