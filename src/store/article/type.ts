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

export interface IComment {
  account: string
  content: string
  floor: number
  gender: number
  timeAgo: number
  likeAmount: number
}

export interface IArticleSlice {
  article: IArticle
  articleList: IArticle[]
  commentList: IComment[]
}
