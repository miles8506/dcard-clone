import { MSSessionStore } from "@/utils";

export function useAuth() {
  const isAuth = () => !!(MSSessionStore.getItem('loginInfo'))

  return {
    isAuth
  }
}
