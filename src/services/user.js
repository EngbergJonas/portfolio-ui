import axios from '../services/interceptors'
import { errorService } from './index'
const baseUrl = '/api/users'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getUser = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  return await axios
    .get(baseUrl + '/' + id, config)
    .then((r) => r.data)
    .catch((e) => Promise.reject(errorService.parseError(e)))
}

const postUser = async () =>
  await axios
    .post(baseUrl)
    .then((r) => r.data)
    .catch((e) => Promise.reject(errorService.parseError(e)))

const userService = {
  getUser,
  setToken,
  postUser,
}

export default userService
