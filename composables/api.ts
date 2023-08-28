import { UseFetchOptions } from "#app";
import { KeysOf } from "nuxt/dist/app/composables/asyncData";
import { DataObj } from "~/utils/interfaces";


export async function requestProductsList(url: string, options?: UseFetchOptions<string, string, KeysOf<string>, null, string, "get"> | undefined): Promise<DataObj> {
  let usefulRes: DataObj = await useFetch(url, options).then((res) => res.data.value).catch(errorHandler) as DataObj
  if (!usefulRes) {
    console.log('second request')
    usefulRes = await useFetch(url, options).then((res) => res.data.value).catch(errorHandler) as DataObj
  }
  return usefulRes
}
function errorHandler(err: Error): void {
  console.error(err)
}

