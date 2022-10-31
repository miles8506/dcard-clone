import { memo, useState, useCallback } from 'react'

import { AllWrapper } from './style'
import ArticleItem from '@/components/main/article-item'
import MSModal from '@/base-ui/MSModal'
import Article from '@/components/main/article'

const All = memo(() => {
  const [isShowArticleModal, setIsShowArticleModal] = useState(true)
  const handleCloseModal = useCallback(() => {
    setIsShowArticleModal(false)
  }, [setIsShowArticleModal])
  const handleOpenModal = () => {
    setIsShowArticleModal(true)
  }

  return (
    <AllWrapper>
      <div className="article-item" onClick={handleOpenModal}>
        <ArticleItem />
      </div>
      <MSModal
        open={isShowArticleModal}
        onCancel={handleCloseModal}
      >
        <Article />
      </MSModal>
    </AllWrapper>
  )
})

export default All
