import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestCol } from '@/api'
// import type { IArea } from './type'

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const allLoadBoardIcon = require('@/assets/svg/all-load-board-icon')
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const hotIcon = require('@/assets/svg/hot-icon')
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const researchIcon = require('@/assets/svg/research-icon')
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const rankIcon = require('@/assets/img/rank.png')
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const gameIcon = require('@/assets/img/game.png')

export const requestAreaList = createAsyncThunk('areaList', async () => {
  const res = await requestCol('area')
  const areaList: string[] = []
  res.forEach((item: any) => {
    areaList.push(item.data().name)
  })
  return areaList
})
