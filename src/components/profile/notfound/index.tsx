import { FC, memo, PropsWithChildren, ReactNode } from 'react'

import { useNavigate } from 'react-router-dom'

import { NotfoundWrapper } from './style'
import MSButton from '@/base-ui/MSButton'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const notFoundImg = require('@/assets/img/notfound.webp')

const Notfound = memo(() => {
  const navigate = useNavigate()

  return (
    <NotfoundWrapper>
      <div className="notfound">
        <div className="notfound-img">
          <img src={notFoundImg} alt="" />
        </div>
        <div className="notfound-info">
          <h2>沒有已經收藏的文章</h2>
          <p>收藏喜歡的文章就不怕以後找不到囉！</p>
        </div>
        <div className="notfound-operation">
          <MSButton
            sx={{
              padding: '11px 16px',
              background: '#3397cf',
              color: '#fff',
              fontSize: '16px'
            }}
            bgHoverColor="#5ab0db"
            onClick={() => navigate('/main')}
          >
            去看文章
          </MSButton>
        </div>
      </div>
    </NotfoundWrapper>
  )
})

export default Notfound
