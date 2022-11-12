import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestCol, requestRef } from '@/api'

import type { IAreaList, IHotBoard } from './type'

export const requestAreaList = createAsyncThunk('areaList', async () => {
  const res = await requestCol('area')
  const areaList: IAreaList[] = []
  res.forEach((item: any) => {
    const { name, path } = item.data()
    areaList.push({ name, path })
  })
  return areaList
})

export const requestHotBoard = createAsyncThunk('hotBoard', async () => {
  const res = await requestCol('hotBoard')
  const hotBoardList: IHotBoard[] = []
  res.forEach((item: any) => {
    const { name, imgUrl, path } = item.data()
    hotBoardList.push({ name, imgUrl, path })
  })
  return hotBoardList
})
