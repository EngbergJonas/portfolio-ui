// Redux
import { setErrors } from '../reducers/errorSlice'
import store from '../store'

const parseError = async (error) => {
  console.log('Error: ', error.response)
  if (error.response && error.response.data && error.response.data.errors) {
    await store.dispatch(setErrors(error.response.data.errors))
    return error.response.data
  }
  return null
}

const errorService = { parseError }

export default errorService
