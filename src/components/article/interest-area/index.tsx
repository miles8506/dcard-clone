import { Fragment, memo } from 'react'

import { ReduxStateType } from '@/store'
import { useSelector, shallowEqual } from 'react-redux'
import { deepCopy } from '@/utils'

import { InterestAreaWrapper } from './style'
import InterestItem from '../interest-item'

const InterestArea = memo(() => {
  const { articleList } = useSelector(
    (state: ReduxStateType) => ({
      articleList: state.post.articleList
    }),
    shallowEqual
  )

  function getRandomArticleList() {
    const resultList = []
    const deepCopyArticleList = deepCopy(articleList)
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * deepCopyArticleList.length)
      resultList.push(deepCopyArticleList[index])
      deepCopyArticleList.splice(index, 1)
    }
    return resultList
  }

  const renderArticleList = getRandomArticleList()

  return (
    <InterestAreaWrapper>
      <div className="interest-area">
        <div className="interest-area-title">你可能感興趣的文章</div>
        <div className="interest-area-content">
          {renderArticleList.map((item) => (
            <Fragment key={item.id}>
              <InterestItem article={item}/>
            </Fragment>
          ))}
        </div>
      </div>
    </InterestAreaWrapper>
  )
})

export default InterestArea
