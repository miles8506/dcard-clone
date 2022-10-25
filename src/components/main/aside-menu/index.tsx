import { memo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useTabContext } from '@/context/main-context/tab-context'

import { AsideMenuWrapper } from './style'

const AsideMenu = memo(() => {
  const { resetTabIndex } = useTabContext()

  const navigate = useNavigate()
  const handleNavigate = (pathName: string) => {
    resetTabIndex()
    navigate(pathName)
  }

  const asideMenu = [
    {
      name: '所有看板',
      path: '/main/any/all'
    },
    {
      name: '興趣',
      path: '/main/hobby/all'
    },
    {
      name: '遊戲',
      path: '/main/play/all'
    },
    {
      name: '心情',
      path: '/main/emotion/all'
    },
    {
      name: '運動',
      path: '/main/sport/all'
    }
  ]

  return (
    <AsideMenuWrapper>
      {
        asideMenu.map(item => (
          <div key={item.name} onClick={() => handleNavigate(item.path)}>
            {item.name}
          </div>
        ))
      }
    </AsideMenuWrapper>
  )
})

export default AsideMenu
