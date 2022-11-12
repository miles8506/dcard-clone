import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestRef, requestCol } from '@/api'

export const requestArticle = createAsyncThunk('article', async (articleId: number) => {
  const res = await requestRef('post', articleId.toString())
  return res
})

export const requestArticleList = createAsyncThunk('articleList', async () => {
  const res = await requestCol('post')
  const list: any = []
  res.forEach((item: any) => {
    list.push(item.data())
  })
  return list
})

export const requestCommentList = createAsyncThunk('commentList', async (articleId: number) => {
  const res = await requestRef('comment', articleId.toString())
  return res.comment
})
