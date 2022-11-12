import { FC, memo } from 'react'

import { DisplayAreaWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import LoveIcon from '@/assets/svg/love-icon'
import CollectIcon from '@/assets/svg/collect-icon'

interface IProps {
  changeIsShowDisplayArea: (value: boolean) => void
}

const DisplayArea: FC<IProps> = memo(({ changeIsShowDisplayArea }) => {
  const getGender = (value: number) =>
  value === 0 ? <AvatarGirlIcon width={28} height={28} /> : <AvatarBoyIcon width={28} height={28} />
  return (
    <DisplayAreaWrapper>
      <div className="display-area">
        <div className="display-area__avatar">{getGender(1)}</div>
        <div className="display-area__comment-input" onClick={() => changeIsShowDisplayArea(false)}>留言...</div>
        <div className="display-area__operation">
          <div className="love-icon">
            <LoveIcon />
          </div>
          <div className="collect-icon">
            <CollectIcon width={24} height={24} />
          </div>
        </div>
      </div>
    </DisplayAreaWrapper>
  )
})

export default DisplayArea
