import { memo, useState, useCallback, useEffect, Fragment } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { requestArticle } from '@/store/main/async-thunk'
import { requestArticleList } from '@/store/post/async-thunk'
import { emptyArticle } from '@/store/main'
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
    articleList: state.post.articleList
  }), shallowEqual)

  const { currentStatusIndex } = useFilterSelectContext()
  const { tabIndex } = useTabContext()
  const { sort } = useRouterInfo()

  const [isShowArticleModal, setIsShowArticleModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setIsShowArticleModal(false)
  }, [setIsShowArticleModal])

  const handleOpenModal = async (articleId: number) => {
    console.log(articleId);
    await dispatch(requestArticle(articleId))
    setIsShowArticleModal(true)
  }

  const handleReset = () => {
    dispatch(emptyArticle())
  }

  useEffect(() => {
    dispatch(requestArticleList())
  }, [sort, tabIndex, currentStatusIndex])

  return (
    <AllWrapper>
      {
        filterList(articleList, (sort as string), currentStatusIndex).map(item => (
          <div className="article-item" onClick={() => handleOpenModal(item.id)} key={item.id}>
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
