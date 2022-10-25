import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  isLogin: boolean
}

const initialState: IInitialState = {
  isLogin: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginStatus(state, { payload }) {
      state.isLogin = payload
    }
  }
})

export default loginSlice.reducer
export const { changeLoginStatus } = loginSlice.actions
