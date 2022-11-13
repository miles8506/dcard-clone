import { memo, useState, useCallback, useEffect } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { requestArticle, requestArticleList, requestCommentList } from '@/store/article/async-thunk'
import { emptyArticle } from '@/store/article'
import { useFilterSelectContext } from '@/context/main-context/filter-select-context'
import { useTabContext } from '@/context/main-context/tab-context'
import { useRouterInfo } from '@/context/router-info-context'
import { filterList } from '@/utils'

import { AllWrapper } from './style'
import ArticleItem from '@/components/main/article-item'
import MSModal from '@/base-ui/MSModal'
import Article from '@/components/article'

const All = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { articleList } = useSelector((state: ReduxStateType) => ({
    articleList: state.article.articleList
  }), shallowEqual)

  const { currentStatusIndex } = useFilterSelectContext()
  const { tabIndex } = useTabContext()
  const { sort } = useRouterInfo()

  const [isShowArticleModal, setIsShowArticleModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setIsShowArticleModal(false)
  }, [setIsShowArticleModal])

  const handleModal = async (articleId: number) => {
    await dispatch(requestArticle(articleId))
    await dispatch(requestCommentList(articleId))
    setIsShowArticleModal(true)
  }

  const handleReset = () => {
    dispatch(emptyArticle())
    dispatch(requestArticleList())
  }

  useEffect(() => {
    dispatch(requestArticleList())
  }, [sort, tabIndex, currentStatusIndex])

  return (
    <AllWrapper>
      {
        filterList(articleList, (sort as string), currentStatusIndex).map(item => (
          <div className="article-item" onClick={() => handleModal(item.id)} key={item.id}>
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
    </AllWrapper>
  )
})

export default All
