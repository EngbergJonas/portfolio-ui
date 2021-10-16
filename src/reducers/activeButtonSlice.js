import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const activeButtonSlice = createSlice({
  name: 'activeButton',
  initialState,
  reducers: {
    setActiveButton(state, action) {
      return action.payload
    },
  },
})

export const { setActiveButton } = activeButtonSlice.actions
export default activeButtonSlice.reducer
