import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMainState } from './type'

const initialState: IMainState = {
  count: 0
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      state.count += action.payload
    }
  }
})

export const { addCount } = mainSlice.actions
export default mainSlice.reducer
