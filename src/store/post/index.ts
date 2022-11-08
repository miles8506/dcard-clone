import { createSlice } from '@reduxjs/toolkit'
import { requestArticleList } from './async-thunk'
import type { IPostState } from './type'

const initialState: IPostState = {
  articleList: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  },
  extraReducers(build) {
    build.addCase(requestArticleList.fulfilled, (state, { payload }) => {
      state.articleList = payload
    })
  }
})

export default postSlice.reducer
