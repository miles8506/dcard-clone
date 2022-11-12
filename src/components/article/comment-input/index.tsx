import { FC, memo, useState, ChangeEvent } from 'react'

import { CommentInputWrapper } from './style'
import AvatarBoyIcon from '@/assets/svg/avatar-boy-icon'
import AvatarGirlIcon from '@/assets/svg/avatar-girl-icon'
import MSButton from '@/base-ui/MSButton'

interface IProps {
  changeIsShowDisplayArea: (value: boolean) => void
}

const CommentInput: FC<IProps> = memo(({ changeIsShowDisplayArea }) => {
  const [commentValue, setCommentValue] = useState('')

  const changeCommentValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.target.value.trim())
  }

  // const handSendMessage = () => {

  // }

  const getGender = (value: number) =>
    value === 0 ? <AvatarGirlIcon width={28} height={28} /> : <AvatarBoyIcon width={28} height={28} />

  return (
    <CommentInputWrapper>
      <div className="comment-input">
        <div className="comment-input-top">
          <div className="avatar">{ getGender(1) }</div>
          <div className="info">
            <div className="account">123@gmail.com</div>
            <div className="detail">
              <span className="floor">B302</span>
              <span className="date">11月12日 12:12</span>
            </div>
          </div>
        </div>
        <div className="comment-input-main">
          <textarea
            className='main-input'
            placeholder='留言前請詳閱全站戰規本板板規'
            value={commentValue}
            onInput={(event: ChangeEvent<HTMLTextAreaElement>) => changeCommentValue(event)}
          />
        </div>
        <div className="comment-input-bottom">
          <MSButton
            sx={{
              padding: '9px 8px',
              color: 'rgba(0, 0, 0, 0.5)'
            }}
            onClick={() => changeIsShowDisplayArea(true)}
          >取消</MSButton>
          <MSButton
            msDisabled={commentValue.length === 0 ? 'disabled' : ''}
            bgHoverColor={commentValue.length > 0 ? '#5ab0db' : 'none'}
            sx={{
              padding: '9px 16px',
              color: '#fff',
              backgroundColor: commentValue.length === 0 ? 'rgba(0, 0, 0, 0.5)' : '#3397CF',
              marginLeft: '16px'
            }}
            // onClick={}
          >
            送出
          </MSButton>
        </div>
      </div>
    </CommentInputWrapper>
  )
})

export default CommentInput
