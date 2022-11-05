import { ReactNode, useState } from 'react'

import BellIcon from '@/assets/svg/bell-icon'
import HomeIcon from '@/assets/svg/home-icon'
import ProfileIcon from '@/assets/svg/profile-icon'
import ShopIcon from '@/assets/svg/shop-icon'
import SortIcon from '@/assets/svg/sort-icon'
import { memo } from 'react'

import { MobileNavigationWrapper } from './style'
import classNames from 'classnames'

const svgList = [HomeIcon, SortIcon, ShopIcon, BellIcon, ProfileIcon]

const MobileNavigation = memo(() => {
  const [navigationIndex, setNavigationIndex] = useState(0)

  const renderSvgIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HomeIcon />
      case 1:
        return <SortIcon />
      case 2:
        return <ShopIcon />
      case 3:
        return <BellIcon />
      case 4:
        return <ProfileIcon />
    }
  }

  return (
    <MobileNavigationWrapper>
      <div className="m-navigation">
        {svgList.map((item, index) => (
          <div
            className={classNames([
              'm-navigation-icon',
              { active: navigationIndex === index }
            ])}
            key={index}
            onClick={() => setNavigationIndex(index)}
          >
            {renderSvgIcon(index)}
          </div>
        ))}
      </div>
    </MobileNavigationWrapper>
  )
})

export default MobileNavigation
