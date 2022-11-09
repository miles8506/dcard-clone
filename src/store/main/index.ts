import { createSlice } from '@reduxjs/toolkit'
import { requestAreaList, requestHotBoard, requestArticle } from '@/store/main/async-thunk'
import type { IMainState } from './type'
import type { IArticle } from '../post/type'

const initialState: IMainState = {
  areaList: [],
  hotBoardList: [],
  article: {} as IArticle
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {

  },
  extraReducers(build) {
    build.addCase(requestAreaList.fulfilled, (state, { payload }) => {
      state.areaList = payload
    })

    build.addCase(requestHotBoard.fulfilled, (state, { payload }) => {
      state.hotBoardList = payload
    })

    build.addCase(requestArticle.fulfilled, (state, { payload }) => {
      state.article = payload
    })
  }
})

// export const { } = mainSlice.actions
export default mainSlice.reducer
