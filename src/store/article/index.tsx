import { createSlice } from '@reduxjs/toolkit'
import {  requestArticle, requestArticleList, requestCommentList } from './async-thunk'
import type { IArticleSlice, IArticle, ICommentResponse } from './type'

const initialState: IArticleSlice = {
  article: {} as IArticle,
  articleList: [],
  commentList: {} as ICommentResponse
}

const articleSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    emptyArticle(state) {
      state.article = {} as IArticle
    }
  },
  extraReducers(build) {
    build.addCase(requestArticle.fulfilled, (state, { payload }) => {
      state.article = payload
    })

    build.addCase(requestArticleList.fulfilled, (state, { payload }) => {
      state.articleList = payload
    })

    build.addCase(requestCommentList.fulfilled, (state, { payload }) => {
      state.commentList = payload
    })
  }
})

export const { emptyArticle } = articleSlice.actions
export default articleSlice.reducer
