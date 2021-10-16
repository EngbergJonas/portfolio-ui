import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  email: '',
  firstname: '',
  lastname: '',
  phone: '',
  id: '',
  token: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { username, email, firstname, lastname, phone, id, token } = action.payload
      state.username = username || ''
      state.email = email || ''
      state.firstname = firstname || ''
      state.lastname = lastname || ''
      state.phone = phone || ''
      state.id = id || ''
      state.token = token || ''
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
