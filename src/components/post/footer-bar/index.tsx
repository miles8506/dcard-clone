import { memo, useRef, ChangeEvent, useState, useEffect } from 'react'

import type { IGetEditorHTML } from '@/base-ui/MSEditor'

import { usePostContext } from '@/context/post-context'
import { MSSessionStore, getCurrentTimeStamp } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { setQuery } from '@/api'

import { FooterBarWrapper } from './style'
import PicIcon from '@/assets/svg/pic-icon'
import MSButton from '@/base-ui/MSButton'

const FooterBar = memo(() => {
  const navigation = useNavigate()
  const { MSEditorRef, boardIndex, postDateTime, title } = usePostContext()
  const FileRef = useRef<HTMLInputElement>(null)

  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileClick = () => {
    FileRef.current?.click()
  }

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    MSEditorRef.current?.handleImageFile(event)
  }

  const savePost = async () => {
    const userInfo = MSSessionStore.getItem('loginInfo')
    if (!userInfo?.account) return navigation('/main')
    setIsLoading(true)
    const { postHTMLString, firstImage, pureText } = MSEditorRef.current?.getEditorHTML() as IGetEditorHTML
    const postId = getCurrentTimeStamp()
    const request = {
      id: postId,
      account: userInfo.account,
      gender: userInfo.gender,
      title: title.trim(),
      pureText,
      content: postHTMLString,
      firstImage: firstImage ?? null,
      sort: boardIndex,
      date: postDateTime,
      commentTotal: 0,
      likeTotal: 0
    }
    await setQuery('post', request.id, request)
    await setQuery('comment', request.id, { comment: [], id: request.id })
    navigation('/main')
  }

  useEffect(() => {
    (title.trim().length === 0 || boardIndex === null || isLoading) ? setIsDisabled(true) : setIsDisabled(false)
  }, [title, boardIndex, isLoading])

  return (
    <FooterBarWrapper>
      <div className="footer-bar">
        <div className="footer-bar__function-box">
          <div className="pic-icon" onClick={handleFileClick}>
            <PicIcon />
          </div>
        </div>
        <div className="footer-bar__step-box">
          <MSButton
            sx={{
              padding: '11px 8px',
              color: 'rgba(0, 0, 0, 0.5)'
            }}
            onClick={() => navigation('/main')}
          >
            取消
          </MSButton>
          <MSButton
            msDisabled={isDisabled ? 'disabled' : ''}
            bgHoverColor={!isDisabled ? '#5ab0db' : 'none'}
            sx={{
              padding: '11px 16px',
              color: '#fff',
              backgroundColor: isDisabled ? 'rgba(0, 0, 0, 0.5)' : '#3397CF'
            }}
            onClick={savePost}
            isLoading={isLoading}
          >
            下一步
          </MSButton>
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
