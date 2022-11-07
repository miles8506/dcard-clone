import { memo } from 'react'

import { PostWrapper } from './style'
import Header from '@/components/post/header'
import Tabs from '@/components/post/tabs'
import SelectBar from '@/components/post/select-bar'
import PostContextProvider from '@/context/post-context'
import InfoBar from '@/components/post/info-bar'
import Editor from '@/components/post/editor'
import FooterBar from '@/components/post/footer-bar'

const Post = memo(() => {
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

export default Post
