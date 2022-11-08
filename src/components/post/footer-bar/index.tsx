import { memo, useRef, ChangeEvent } from 'react'

import type { IGetEditorHTML } from '@/base-ui/MSEditor'

import { usePostContext } from '@/context/post-context'
import { MSSessionStore } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { setQuery } from '@/api'

import { FooterBarWrapper } from './style'
import PicIcon from '@/assets/svg/pic-icon'
import dayjs from 'dayjs'

const FooterBar = memo(() => {
  const navigation = useNavigate()
  const { MSEditorRef, boardIndex, postDateTime, title } = usePostContext()
  const FileRef = useRef<HTMLInputElement>(null)

  // const { hotBoardList } = useSelector(
  //   (state: ReduxStateType) => ({
  //     hotBoardList: state.main.hotBoardList
  //   }),
  //   shallowEqual
  // )

  const handleFileClick = () => {
    FileRef.current?.click()
  }

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    MSEditorRef.current?.handleImageFile(event)
  }

  const savePost = async () => {
    const { account, gender } = MSSessionStore.getItem('loginInfo')
    if (!account) return navigation('/main')
    if (boardIndex === null) return
    const postId = dayjs().valueOf()
    const { postHTMLString, firstImage, pureText } = MSEditorRef.current?.getEditorHTML() as IGetEditorHTML
    const request = {
      id: postId,
      account,
      gender,
      title: title.trim(),
      pureText,
      content: postHTMLString,
      firstImage: firstImage ?? null,
      sort: boardIndex,
      date: postDateTime,
      messages: [],
      commentTotal: 0,
      likeTotal: 0
    }
    await setQuery('post', request.id, request)
    navigation('/main')
  }

  return (
    <FooterBarWrapper>
      <div className="footer-bar">
        <div className="footer-bar__function-box">
          <div className="pic-icon" onClick={handleFileClick}>
            <PicIcon />
          </div>
        </div>
        <div className="footer-bar__step-box">
          <div className="cancel-button">取消</div>
          <div className="active step-button" onClick={savePost}>下一步</div>
        </div>
      </div>
      <div className="file-input">
        <input
          type="file"
          ref={FileRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeImage(event)}
        />
      </div>
    </FooterBarWrapper>
  )
})

export default FooterBar
