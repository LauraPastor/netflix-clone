import authApi from '@/api/auth'
import { useUserStore } from '@/stores/user'

const forbidUnauthenticated = async () => {
  const userStore = useUserStore()
  if (userStore.currentUser) {
    return true
  }
  try {
    const user = await authApi.getMe()
    userStore.currentUser = user
    return true
  } catch {
    return { name: 'AuthView' }
  }
}

export { forbidUnauthenticated }
