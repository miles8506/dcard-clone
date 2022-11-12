import { memo, useEffect } from 'react'

import { MSSessionStore } from '@/utils'
import { useNavigate } from 'react-router-dom'
import RouterProvider from '@/context/router-info-context'

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
    const userInfo = MSSessionStore.getItem('loginInfo')
    !(userInfo?.account) && navigation('/main')
  }, [])

  return (
    <PostContextProvider>
      <PostWrapper>
        <Header />
        <div className="post">
          <Tabs />
          <SelectBar />
          <InfoBar />
          <Editor />
          <FooterBar />
        </div>
      </PostWrapper>
    </PostContextProvider>
  )
})

export default RouterProvider(Post)
