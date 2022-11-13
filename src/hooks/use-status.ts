import { deepCopy } from "@/utils"
import type { IUserInfo } from "@/store/login/type"

export const findCollectIndex = (articleId: number, userInfo: IUserInfo) => {
  return userInfo?.articleCollectList?.findIndex(item => item === articleId)
}

export const findArticleLoveIndex = (articleId: number, userInfo: IUserInfo) => {
  return userInfo.articleLikeList.findIndex(item => item === articleId)
}

export const findCommentLoveIndex = (commentId: number, userInfo: IUserInfo) => {
  return userInfo.commentLikeList.findIndex(item => item === commentId)
}

export const useChangeCollectStatus = (articleId: number, userInfo: IUserInfo) => {
  const _userInfo: IUserInfo = deepCopy(userInfo)
  const articleCollectIndex = findCollectIndex(articleId, _userInfo)
  if (articleCollectIndex !== -1) {
    _userInfo.articleCollectList.splice(articleCollectIndex, 1)
  } else {
    _userInfo.articleCollectList.push(articleId)
  }
  return _userInfo
}

export const useChangeArticleLikeStatus = (articleId: number, userInfo: IUserInfo) => {
  let isAdd: boolean | null = null
  const _userInfo: IUserInfo = deepCopy(userInfo)
  const articleCollectIndex = findArticleLoveIndex(articleId, _userInfo)
  if (articleCollectIndex !== -1) {
    _userInfo.articleLikeList.splice(articleCollectIndex, 1)
    isAdd = false
  } else {
    _userInfo.articleLikeList.push(articleId)
    isAdd = true
  }
  return {
    _userInfo,
    isAdd
  }
}

export const useChangeCommentLikeStatus = (commentId: number, userInfo: IUserInfo) => {
  let isAdd: boolean | null = null
  const _userInfo: IUserInfo = deepCopy(userInfo)
  const articleCommentIndex = findCommentLoveIndex(commentId, _userInfo)
  if (articleCommentIndex !== -1) {
    _userInfo.commentLikeList.splice(articleCommentIndex, 1)
    isAdd = false
  } else {
    _userInfo.commentLikeList.push(commentId)
    isAdd = true
  }

  return {
    _userInfo,
    isAdd
  }
}
