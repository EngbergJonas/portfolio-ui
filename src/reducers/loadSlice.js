import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const loadSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      return action.payload
    },
  },
})

export const { setIsLoading } = loadSlice.actions
export default loadSlice.reducer
