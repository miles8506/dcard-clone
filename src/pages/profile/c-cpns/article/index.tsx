import { memo, useState, useEffect, useCallback } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'
import type { IArticle } from '@/store/article/type'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { requestUserInfo } from '@/store/login/async-thunk'
import { requestArticle, requestArticleList, requestCommentList } from '@/store/article/async-thunk'
import { requestHotBoard } from '@/store/main/async-thunk'
import { emptyArticle } from '@/store/article'


import { ArticleWrapper } from './style'
import ArticleItem from '@/components/common/article-item'
import Notfound from '@/components/profile/notfound'
import MSModal from '@/base-ui/MSModal'
import { default as ModalArticle} from '@/components/article'


const Article = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { userInfo, articleList } = useSelector((state: ReduxStateType) => ({
    userInfo: state.login.userInfo,
    articleList: state.article.articleList
  }), shallowEqual)

  const [isShowArticleModal, setIsShowArticleModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setIsShowArticleModal(false)
  }, [setIsShowArticleModal])

  const handleReset = () => {
    dispatch(emptyArticle())
    dispatch(requestArticleList())
  }

  const handleModal = async (articleId: number) => {
    await dispatch(requestArticle(articleId))
    await dispatch(requestCommentList(articleId))
    setIsShowArticleModal(true)
  }

  const filterCreateArticle = (articleList: IArticle[], userCreateList: number[]) => {
    return articleList?.filter(articleItem => userCreateList?.some(collectItem => articleItem.id === collectItem))
  }

  useEffect(() => {
    dispatch(requestHotBoard())
    dispatch(requestUserInfo())
    dispatch(requestArticleList())
  }, [])

  return (
    <ArticleWrapper>
      <div className="article">
        <div className="article-title">我的文章</div>
        <div className="article-main">
          <div className="article-list">
            {
              filterCreateArticle(articleList, userInfo.createArticleList)?.map((item, index, array) => (
                <div
                  className="article-item"
                  key={item.id}
                  onClick={() => handleModal(item.id)}
                >
                  <ArticleItem
                    article={item}
                    sx={{
                      margin: '0 20px',
                      borderBottom: array.length === index ? 0 : '1px solid rgb(233, 233, 233)'
                    }}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <MSModal
        open={isShowArticleModal}
        onCancel={handleCloseModal}
        afterClose={handleReset}
        destroyOnClose
        width="720px"
        style={{
          height: '100vh'
        }}
      >
        <ModalArticle onCancel={handleCloseModal} />
      </MSModal>
    </ArticleWrapper>
  )
})

export default Article
