import { memo, useEffect } from 'react'

import classNames from 'classnames'
import { useMobileNavigateContext } from '@/context/main-context/mobile-navigate-context'
import useWindowRWD from '@/hooks/use-window-rwd'
import { MobileNavigate } from '@/enum'

import { MobileNavigationWrapper } from './style'
import HomeIcon from '@/assets/svg/home-icon'
import ProfileIcon from '@/assets/svg/profile-icon'
import SortIcon from '@/assets/svg/sort-icon'

const svgList = [HomeIcon, SortIcon, ProfileIcon]

const MobileNavigation = memo(() => {
  const { size } = useWindowRWD()

  const { navigateCurrentIndex, changeNavigateCurrentIndex } = useMobileNavigateContext()

  const renderSvgIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HomeIcon />
      case 1:
        return <SortIcon />
      case 2:
        return <ProfileIcon />
    }
  }

  useEffect(() => {
    if (size.width < 996 || navigateCurrentIndex === MobileNavigate.home) return
    changeNavigateCurrentIndex(MobileNavigate.home)
  }, [size])

  return (
    <MobileNavigationWrapper>
      <div className="m-navigation">
        {svgList.map((item, index) => (
          <div
            className={classNames([
              'm-navigation-icon',
              { active: navigateCurrentIndex === index }
            ])}
            key={index}
            onClick={() => changeNavigateCurrentIndex(index)}
          >
            {renderSvgIcon(index)}
          </div>
        ))}
      </div>
    </MobileNavigationWrapper>
  )
})

export default MobileNavigation
