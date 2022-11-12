// interface IMassage {

// }

export interface IArticle {
  id: number
  account: string
  gender: number,
  content: string
  date: string
  firstImage: string | null
  sort: number
  title: string,
  pureText: string,
  commentTotal: number,
  likeTotal: number
}

export interface IPostState {
  articleList: IArticle[]
}
