import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  errors: [],
}

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setErrors(state, action) {
      return action.payload
    },
  },
})

export const { setErrors } = errorSlice.actions
export default errorSlice.reducer
