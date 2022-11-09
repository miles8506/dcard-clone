import { IArticle } from "../post/type"

export interface IMainState {
  areaList: IAreaList[]
  hotBoardList: IHotBoard[]
  article: IArticle
}

export interface IAreaList {
  name: string
  path: string
}

export interface IHotBoard {
  name: string
  imgUrl: string
  path: string
}
