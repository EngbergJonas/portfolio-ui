import { createSlice } from '@reduxjs/toolkit'
import { dark } from '../components/Shared/Theme'

const initialState = dark

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      return action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
