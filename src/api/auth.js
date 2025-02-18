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

const authApi = { signup, login }

export default authApi
