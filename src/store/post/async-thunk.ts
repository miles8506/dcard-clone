import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestCol } from '@/api'

export const requestArticleList = createAsyncThunk('articleList', async () => {
  const res = await requestCol('post')
  const list: any = []
  res.forEach((item: any) => {
    list.push(item.data())
  })
  return list
})
