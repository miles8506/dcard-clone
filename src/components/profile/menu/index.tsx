import { memo } from 'react'

import { MenuWrapper } from './style'
import MenuItem from '../menu-item'
import CollectIcon from '@/assets/svg/collect-icon'
import ArticleIcon from '@/assets/svg/article-icon'

const Menu = memo(() => {

  return (
    <MenuWrapper>
      <div className="menu">
        <MenuItem customColor='#3397cf' path='collect'>
          <>
            <CollectIcon width={24} height={24} />
          </>
          <>我的收藏</>
        </MenuItem>
        <MenuItem customColor='#3397cf' path='article'>
          <>
            <ArticleIcon />
          </>
          <>我的文章</>
        </MenuItem>
      </div>
    </MenuWrapper>
  )
})

export default Menu
