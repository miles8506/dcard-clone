import { memo } from 'react'

import { MainWrapper } from './style'
import { Outlet } from 'react-router-dom'

const Main = memo(() => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  )
})

export default Main
