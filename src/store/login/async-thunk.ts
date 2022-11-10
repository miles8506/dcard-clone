import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestRef } from '@/api'
import { MSSessionStore } from '@/utils'

export const requestUserInfo = createAsyncThunk('userInfo', async () => {
  const { account } = MSSessionStore.getItem('loginInfo')
  const res = await requestRef('user', account)
  return res
})
