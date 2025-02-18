import apiConfig from './config'

const signup = async (inputData) => {
  const response = await apiConfig.post('/users/signup', inputData)
  const {
    token,
    data: { user },
  } = response.data
  return { token, user }
}
const login = async (inputData) => {
  const response = await apiConfig.post('/users/login', inputData)
  const {
    token,
    data: { user },
  } = response.data
  return { token, user }
}

const getMe = async () => {
  const response = await apiConfig.get('/users/me')
  const {
    data: { user },
  } = response.data
  return user
}

const authApi = { signup, login, getMe }

export default authApi
