import axios from '../services/interceptors'
import { errorService } from './index'
const baseUrl = '/login'

const login = async (credentials) =>
  await axios
    .post(baseUrl, credentials)
    .then((r) => r.data)
    .catch((e) => Promise.reject(errorService.parseError(e)))

const loginService = { login }

export default loginService
