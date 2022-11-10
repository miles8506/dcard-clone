export interface IUserInfo {
  account: string
  displayName: string
  gender: number
  type: string
}

export interface IInitialState {
  isLogin: boolean
  userInfo: IUserInfo
}