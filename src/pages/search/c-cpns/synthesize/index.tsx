import { memo, useState, useCallback, useEffect } from 'react'

import type { ReduxStateType, ReduxDispatchType } from '@/store'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'
import { filterSearchArticleList } from '@/utils'
import { emptyArticle } from '@/store/article'
import { requestArticle, requestArticleList, requestCommentList } from '@/store/article/async-thunk'

import { SynthesizeWrapper } from './style'
import BoardBanner from '@/components/search/synthesize/board-banner'
import ArticleItem from '@/components/common/article-item'
import MSModal from '@/base-ui/MSModal'
import Article from '@/components/article'
import SearchBoard from '@/components/search/search-board'

const Synthesize = memo(() => {
  const { articleList } = useSelector((state: ReduxStateType) => ({
    articleList: state.article.articleList
  }), shallowEqual)
  const dispatch: ReduxDispatchType = useDispatch()

  const { query } = useRouterInfo()

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
    console.log('get');
    dispatch(requestArticleList())
  }, [])

  return (
    <SynthesizeWrapper>
      <BoardBanner />
      {
        filterSearchArticleList(articleList, query).map(item => (
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
      { !query && <SearchBoard /> }
     </SynthesizeWrapper>
  )
})

export default Synthesize
