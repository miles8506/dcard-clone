import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestRef } from '@/api'
import { MSSessionStore } from '@/utils'
import { LOGIN_INFO } from '@/constants'

export const requestUserInfo = createAsyncThunk('userInfo', async () => {
  const { account } = MSSessionStore.getItem(LOGIN_INFO)
  const res = await requestRef('user', account)
  MSSessionStore.setItem('loginInfo', res)
  return res
})
