import { createSlice } from '@reduxjs/toolkit'

const initialState = 'en'

// Use this slice to get the current language for translations to data from DB
const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      setLanguage(state, action) {
        return action.payload
      },
    },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
