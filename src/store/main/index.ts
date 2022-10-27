import { createSlice } from '@reduxjs/toolkit'
import { IMainState } from './type'
import { requestAreaList } from '@/store/main/async-thunk'

const initialState: IMainState = {
  areaList: []
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
  }
})

// export const { } = mainSlice.actions
export default mainSlice.reducer
