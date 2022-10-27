import { memo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useTabContext } from '@/context/main-context/tab-context'

import { AsideMenuWrapper } from './style'
import Area from './area'

const AsideMenu = memo(() => {
  const { resetTabIndex } = useTabContext()

  const navigate = useNavigate()
  const handleNavigate = (pathName: string) => {
    resetTabIndex()
    navigate(pathName)
  }

  return (
    <AsideMenuWrapper>
      <Area />
    </AsideMenuWrapper>
  )
})

export default AsideMenu
