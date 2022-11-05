import { memo } from 'react'

import { PostWrapper } from './style'
import Header from '@/components/post/header'
import Tabs from '@/components/post/tabs'

const Post = memo(() => {
  return (
    <PostWrapper>
      <Header />
      <div className="post">
        <Tabs />
      </div>
    </PostWrapper>
  )
})

export default Post
