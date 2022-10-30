import { memo, useState } from 'react'

import { useRouterInfo } from '@/context/router-info-context'

import { AllWrapper } from './style'
import ArticleItem from '@/components/main/article-item'
import MSModal from '@/base-ui/MSModal'
import MSButton from '@/base-ui/MSButton'

const All = memo(() => {
  const { sort, status } = useRouterInfo()
  const [active, setActive] = useState(false)

  return (
    <AllWrapper>
      <h2>{sort}</h2>
      <h2>{status}</h2>
      <MSButton onClick={() => setActive(true)}>123</MSButton>
      <ArticleItem></ArticleItem>
      <MSModal open={active} footer={null} onCancel={() => setActive(false)}>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
      </MSModal>
    </AllWrapper>
  )
})

export default All
