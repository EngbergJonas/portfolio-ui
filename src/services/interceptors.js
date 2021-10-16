import axios from 'axios'
import { utils } from './index'

let user = null
let token = null

const customAxios = axios.create({})

// Request interceptor
customAxios.interceptors.request.use(
  (req) => handleRequest(req),
  (e) => {
    console.log('Error from request interceptor: ', e.response)
    return handleError(e)
  }
)

// Response interceptor
customAxios.interceptors.response.use(
  (res) => handleResponse(res),
  (e) => {
    console.log('Error intercepted from response: ', e.response)
    return handleError(e)
  }
)

const handleResponse = (response) => {
  console.log('Intercepted response', res)
  return response
}

const handleRequest = (request) => {
  addTokenIfExists(request)
  return request
}

const handleError = (e) => {
  // TODO: when this works for response add to Redux error variable to display in app
  if (e.response.status === 401) {
    console.log('Code was 401: Authorization error from response')
  }
  return Promise.reject(e)
}

const addTokenIfExists = (req) => {
  user = JSON.parse(window.localStorage.getItem('loggedUser'))
  token = `Bearer ${user ? user.token : null}`

  // Check if token is expired with every request, if it is, remove it from localStorage
  token = utils.checkIfTokenExpired(user, token)

  // Add token to each request if it's found
  if (token) {
    req.headers = {
      ...req.headers,
      Authorization: token,
    }
  }

  console.log('Intercepted request: ', req)

  return req
}

export default customAxios
