import { memo, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import MSModal from '@/base-ui/MSModal'

const Article = memo(() => {
  const navigate = useNavigate()
  const [modalState] = useState(true)

  return (
    <div>
      <MSModal
        open={modalState}
        title="is Title"
        footer={null}
        onCancel={() => navigate('/main/curation')}
      />
    </div>
  )
})

export default Article
