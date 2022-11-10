import { createSlice } from '@reduxjs/toolkit'
import { requestUserInfo } from './async-thunk'
import type { IUserInfo, IInitialState } from './type'

const initialState: IInitialState = {
  isLogin: false,
  userInfo: {} as IUserInfo
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginStatus(state, { payload }) {
      state.isLogin = payload
    },
    emptyUserInfo(state) {
      state.userInfo = {} as IUserInfo
    }
  },
  extraReducers(build) {
    build.addCase(requestUserInfo.fulfilled, (state, { payload }) => {
      state.userInfo = payload
    })
  }
})

export default loginSlice.reducer
export const { changeLoginStatus, emptyUserInfo } = loginSlice.actions
