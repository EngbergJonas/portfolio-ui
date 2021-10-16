// Redux
import store from '../store'
import { setUser } from '../reducers/userSlice'

// Services
import userService from './user'

// Set user to redux from localstorage if it is not already found
export const setUserToRedux = async () => {
  let user = JSON.parse(window.localStorage.getItem('loggedUser'))

  if (user && user.username != '') {
    try {
      user = await userService.getUser(user.id)

      const payload = {
        ...user,
        token: JSON.parse(window.localStorage.getItem('loggedUser')).token,
      }

      await store.dispatch(setUser(payload))
    } catch (error) {
      console.log('error getting user and setting to redux: ' + error)
    }
  }
}

// Remove user info from redux, used with logout
export const removeUserFromRedux = async () => {
  try {
    const payload = {
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      id: '',
    }

    await store.dispatch(setUser(payload))
  } catch (error) {
    console.log('error remove user from redux: ' + error)
  }
}

// Set token to the browsers local storage, used after login
export const setTokenToLocalStorage = (user) => {
  const now = new Date()

  const item = {
    token: user.token,
    id: user.id,
    expiry: now.getTime() + 30 * 60000,
  }

  window.localStorage.setItem('loggedUser', JSON.stringify(item))
}

// Token has an expiration set to 30 minutes after creation, if it is older than current date, remove token from local storage
export const checkIfTokenExpired = (user, token) => {
  const now = new Date()
  const isExpired = user && token && user['expiry'] < now.getTime()

  if (isExpired) {
    window.localStorage.removeItem('loggedUser')
    token = null
  }

  return token
}

const utils = {
  setUserToRedux,
  removeUserFromRedux,
  setTokenToLocalStorage,
  checkIfTokenExpired,
}

export default utils
