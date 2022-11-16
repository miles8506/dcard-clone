import { FC, memo } from 'react'

import type { IArticle } from '@/store/article/type'
import type { ReduxDispatchType } from '@/store'

import { useDispatch } from 'react-redux'
import { requestArticle, requestCommentList } from '@/store/article/async-thunk'
import { useArticleContext } from '@/context/article-context'

import { InterestItemWrapper } from './style'



const InterestItem: FC<{ article: IArticle }> = memo(({ article }) => {
  const { title, likeTotal, commentTotal, firstImage, id } = article
  const dispatch: ReduxDispatchType = useDispatch()
  const { articleRef } = useArticleContext()

  const changeArticle = async (id: number) => {
    await dispatch(requestArticle(id))
    await dispatch(requestCommentList(id))
    articleRef.current?.scrollTo(0, 0)
  }

  return (
    <InterestItemWrapper>
      <div className="interest-item ms-overflow" onClick={() => changeArticle(id)}>
        <div className="interest-item-info">
          <div className="title">
            <div className="text">{ title }</div>
          </div>
          <div className="detail">
            <span className="emotion">心情 { likeTotal }</span>
            <span className="comment">留言 { commentTotal }</span>
          </div>
        </div>
        <div className="interest-item-img">
          { firstImage && <img src={firstImage} /> }
        </div>
      </div>
    </InterestItemWrapper>
  )
})

export default InterestItem
