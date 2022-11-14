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
  id: number
  account: string
  content: string
  floor: number
  gender: number
  timeAgo: number
  likeAmount: number
}

export interface ICommentResponse {
  comment: IComment[]
  id: number
}

export interface IArticleSlice {
  article: IArticle
  articleList: IArticle[]
  commentList: ICommentResponse
}

export interface IRequestComment {
  id: number
  account: string
  content: string
  gender: number
  likeAmount: number
  timeAgo: number
  floor: number
}
