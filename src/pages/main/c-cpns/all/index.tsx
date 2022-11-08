import { memo, useState, useCallback, useEffect, Fragment } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { requestArticleList } from '@/store/post/async-thunk'

import { AllWrapper } from './style'
import ArticleItem from '@/components/main/article-item'
import MSModal from '@/base-ui/MSModal'
import Article from '@/components/main/article'

const All = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { articleList } = useSelector((state: ReduxStateType) => ({
    articleList: state.post.articleList
  }), shallowEqual)

  const [isShowArticleModal, setIsShowArticleModal] = useState(false)
  const handleCloseModal = useCallback(() => {
    setIsShowArticleModal(false)
  }, [setIsShowArticleModal])
  const handleOpenModal = () => {
    setIsShowArticleModal(true)
  }

  useEffect(() => {
    dispatch(requestArticleList())
  }, [])

  return (
    <AllWrapper>
      <div className="article-item" onClick={handleOpenModal}>
        {
          articleList.map(item => (
            <Fragment key={item.id}>
              <ArticleItem article={item} />
            </Fragment>
          ))
        }
      </div>
      <MSModal
        open={isShowArticleModal}
        onCancel={handleCloseModal}
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
