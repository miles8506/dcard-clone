import { FC, memo, useEffect, useState, useCallback } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { requestArticle, requestArticleList, requestCommentList } from '@/store/article/async-thunk'
import { filterSearchArticleList, filterCorrelation, filterDateRange } from '@/utils'
import { useRouterInfo } from '@/context/router-info-context'

import { ContentListWrapper } from './style'
import ArticleItem from '@/components/common/article-item'
import MSModal from '@/base-ui/MSModal'
import Article from '@/components/article'
import { emptyArticle } from '@/store/article'

interface IProps {
  isInnerContent: boolean
  currentCorrelationItem: number
  currentTimeItem: number
}

const ContentList: FC<IProps> = memo(({ isInnerContent, currentCorrelationItem, currentTimeItem }) => {
  const { articleList } = useSelector((state: ReduxStateType) => ({
    articleList: state.article.articleList
  }), shallowEqual)
  const dispatch: ReduxDispatchType = useDispatch()

  const { query } = useRouterInfo()

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

  useEffect(() => {
    dispatch(requestArticleList())
  }, [isInnerContent, currentCorrelationItem, currentTimeItem])

  return (
    <ContentListWrapper>
      {
        filterDateRange(
          filterCorrelation(
            filterSearchArticleList(articleList, query, isInnerContent),
            currentCorrelationItem
          ),
          currentTimeItem
        )?.map(item => (
          <div
            className="article-item"
            onClick={() => handleModal(item.id)}
            key={item.id}
          >
            <ArticleItem article={item} />
          </div>
        ))
      }
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
    </ContentListWrapper>
  )
})

export default ContentList
