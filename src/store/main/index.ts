import { createSlice } from '@reduxjs/toolkit'
import { requestAreaList, requestHotBoard } from '@/store/main/async-thunk'
import type { IMainState } from './type'

const initialState: IMainState = {
  areaList: [],
  hotBoardList: [],
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
  }
})

// export const {  } = mainSlice.actions
export default mainSlice.reducer
