export interface IMainState {
  areaList: IAreaList[]
  hotBoardList: IHotBoard[]
}

export interface IAreaList {
  name: string
  path: string
}

export interface IHotBoard {
  name: string
  imgUrl: string
  bgImg: string
  path: string
  id: number
}
