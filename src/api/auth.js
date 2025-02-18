import apiConfig from './config'

async function signup(inputData) {
  const response = await apiConfig.post('/users/signup', inputData)
  const {
    token,
    data: { user },
  } = response.data
  return { token, user }
}
async function login(inputData) {
  const response = await apiConfig.post('/users/login', inputData)
  const {
    token,
    data: { user },
  } = response.data
  return { token, user }
}

const authApi = { signup, login }

export default authApi
