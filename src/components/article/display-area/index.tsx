import { FC, memo } from 'react'

import type { ReduxStateType } from '@/store'

import { useSelector, shallowEqual } from 'react-redux'
import { isAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'

import { DisplayAreaWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/components/common/love-icon'
import CollectIcon from '@/components/common/collect-icon'

interface IProps {
  changeIsShowDisplayArea: (value: boolean) => void
}

const DisplayArea: FC<IProps> = memo(({ changeIsShowDisplayArea }) => {
  const navigation = useNavigate()
  const { article, userInfo } = useSelector(
    (state: ReduxStateType) => ({
      article: state.article.article,
      userInfo: state.login.userInfo
    }),
    shallowEqual
  )

  const handleClickCommentInput = () => {
    const _isAuth = isAuth()
    if (!_isAuth) return navigation('/login')

    changeIsShowDisplayArea(false)
  }

  const getGender = (value: number) =>
  value === 0 ? <AvatarGirlIcon width={28} height={28} /> : <AvatarBoyIcon width={28} height={28} />
  return (
    <DisplayAreaWrapper>
      <div className="display-area">
        <div className="display-area__avatar">{getGender(userInfo.gender)}</div>
        <div className="display-area__comment-input" onClick={handleClickCommentInput}>留言...</div>
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
