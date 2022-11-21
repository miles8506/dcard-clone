export interface IUserInfo {
  account: string
  displayName: string
  gender: number
  type: string
  password?: string,
  articleCollectList: number[]
  articleLikeList: number[]
  commentLikeList: number[]
  createArticleList: number[]
}

export interface IInitialState {
  isLogin: boolean
  userInfo: IUserInfo
}