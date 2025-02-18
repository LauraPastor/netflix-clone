import apiConfig from './config'
const getRandomMovie = async () => {
  const response = await apiConfig.get('/movies/random')
  const {
    data: { movie },
  } = response.data
  return movie
}

const movieApi = { getRandomMovie }

export default movieApi
