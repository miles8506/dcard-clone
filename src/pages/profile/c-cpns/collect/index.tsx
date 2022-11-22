import { memo, useState, useCallback } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'
import type { IArticle } from '@/store/article/type'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { requestArticle, requestArticleList, requestCommentList } from '@/store/article/async-thunk'
import { emptyArticle } from '@/store/article'
import { useNavigate } from 'react-router-dom'

import { CollectWrapper } from './style'
import ArticleItem from '@/components/common/article-item'
import Notfound from '@/components/profile/notfound'
import MSModal from '@/base-ui/MSModal'
import Article from '@/components/article'
import BackIcon from '@/assets/svg/back-icon'

const Collect = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { userInfo, articleList } = useSelector((state: ReduxStateType) => ({
    userInfo: state.login.userInfo,
    articleList: state.article.articleList
  }), shallowEqual)

  const navigate = useNavigate()

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

  const filterCollectArticle = (articleList: IArticle[], userCollect: number[]) => {
    return articleList?.filter(articleItem => userCollect?.some(collectItem => articleItem.id === collectItem))
  }

  return (
    <CollectWrapper>
      <div className="collect">
        <div className="collect-header">
          <div className="back-icon" onClick={() => navigate('/profile/list')}>
            <BackIcon />
          </div>
          <div className="title">我的收藏</div>
        </div>
        <div className="collect-main">
          <div className="collect-list">
            {
              filterCollectArticle(articleList, userInfo.articleCollectList)?.map((item, index, array) => (
                <div
                  className="collect-item"
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
          {
            filterCollectArticle(articleList, userInfo.articleCollectList).length === 0 && <Notfound />
          }
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
        <Article onCancel={handleCloseModal} />
      </MSModal>
    </CollectWrapper>
  )
})

export default Collect
