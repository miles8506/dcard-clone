import { memo, useEffect } from 'react'

import { MSSessionStore } from '@/utils'
import { useNavigate } from 'react-router-dom'
import RouterProvider from '@/context/router-info-context'
import { LOGIN_INFO } from '@/constants'

import { PostWrapper } from './style'
import Header from '@/components/post/header'
import Tabs from '@/components/post/tabs'
import SelectBar from '@/components/post/select-bar'
import PostContextProvider from '@/context/post-context'
import InfoBar from '@/components/post/info-bar'
import Editor from '@/components/post/editor'
import FooterBar from '@/components/post/footer-bar'

const Post = memo(() => {
  const navigation = useNavigate()

  useEffect(() => {
    const userInfo = MSSessionStore.getItem(LOGIN_INFO)
    !userInfo?.account && navigation('/login')
  }, [])

  return (
    <PostContextProvider>
      <PostWrapper>
        <Header />
        <div className="post">
          <div className="post-box">
            <Tabs />
            <SelectBar />
            <InfoBar />
            <Editor />
            <FooterBar />
          </div>
        </div>
      </PostWrapper>
    </PostContextProvider>
  )
})

export default RouterProvider(Post)
