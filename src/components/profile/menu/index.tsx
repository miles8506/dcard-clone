import { memo, useEffect, useState } from 'react'

import { useRouterInfo } from '@/context/router-info-context'

import { MenuWrapper } from './style'
import MenuItem from '../menu-item'
import CollectIcon from '@/assets/svg/collect-icon'
import ArticleIcon from '@/assets/svg/article-icon'

const Menu = memo(() => {
  const { pathname } = useRouterInfo()

  const [activePathName, setActivePathName] = useState('collect')

  useEffect(() => {
    setActivePathName(() => pathname.split('/')[2])
  }, [pathname])

  return (
    <MenuWrapper>
      <div className="menu">
        <MenuItem
          customColor='#3397cf'
          path='collect'
          isActive={activePathName === 'collect'}
        >
          <CollectIcon width={24} height={24} />
          我的收藏
        </MenuItem>
        <MenuItem
          customColor='#3397cf'
          path='article'
          isActive={activePathName === 'article'}
        >
          <ArticleIcon />
          我的文章
        </MenuItem>
      </div>
    </MenuWrapper>
  )
})

export default Menu
