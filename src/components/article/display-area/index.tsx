import { FC, memo } from 'react'

import type { ReduxStateType } from '@/store'

import { useSelector, shallowEqual } from 'react-redux'

import { DisplayAreaWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/components/common/love-icon'
import CollectIcon from '@/components/common/collect-icon'

interface IProps {
  changeIsShowDisplayArea: (value: boolean) => void
}

const DisplayArea: FC<IProps> = memo(({ changeIsShowDisplayArea }) => {
  const { article } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article,
    }),
    shallowEqual
  )

  const getGender = (value: number) =>
  value === 0 ? <AvatarGirlIcon width={28} height={28} /> : <AvatarBoyIcon width={28} height={28} />
  return (
    <DisplayAreaWrapper>
      <div className="display-area">
        <div className="display-area__avatar">{getGender(article.gender)}</div>
        <div className="display-area__comment-input" onClick={() => changeIsShowDisplayArea(false)}>留言...</div>
        <div className="display-area__operation">
          <LoveIcon />
          <CollectIcon
            width={24}
            height={24}
            articleId={article.id}
          />
        </div>
      </div>
    </DisplayAreaWrapper>
  )
})

export default DisplayArea
