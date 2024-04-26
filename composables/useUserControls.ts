import { paths } from "~/src/paths";
import { UseFetchOptions } from "nuxt/app";
import { UserObj } from "utils/interfaces";

const userInit: UserObj = { id: -1 };

export function useUserStorage() {
  const useUser = () => useState("user", () => userInit);

  return useUser();
}

export function useUserKeeping() {
  onMounted(() => {
    userRestore();
    window.addEventListener("storage", syncUser);
  });

  onUnmounted(() => window.removeEventListener("storage", syncUser));
}

export const isLogin = computed(() => {
  const user = useUserStorage();
  return user.value.id > 0;
});

export async function loginUser(nic: string, pas: string) {
  const runtimeConfig = useRuntimeConfig();
  const url = paths.loginPath;
  const options: UseFetchOptions<UserObj> = {
    method: "POST",
    body: JSON.stringify({
      username: nic,
      password: pas,
    }),
    headers: { "Content-Type": "application/json" },
    baseURL: runtimeConfig.public.baseURL,
  };

  const usefulInfo: UserObj | null = await requestUserList(url, options);
  if (usefulInfo) {
    const user = useUserStorage();
    user.value = usefulInfo;
    saveUser(usefulInfo);
  }
  return usefulInfo;
}
export function logoutUser() {
  const user = useUserStorage();
  user.value = userInit;
  localStorage.removeItem("currentUser");
}

function saveUser(userObj: UserObj) {
  localStorage.setItem("currentUser", JSON.stringify(userObj));
}

function userRestore() {
  const _value = localStorage.getItem("currentUser");
  if (!_value) return;
  const user = useUserStorage();
  user.value = JSON.parse(_value);
}
function syncUser(e: StorageEvent) {
  if (e.key !== "currentUser") return;
  const user = useUserStorage();
  if (e.newValue === null) user.value = userInit;
  else userRestore();
}
