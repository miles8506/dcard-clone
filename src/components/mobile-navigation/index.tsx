import { memo, useState } from 'react'

import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { mobileNavigateList, MobileNavigate } from '@/enum'

import { MobileNavigationWrapper } from './style'
import HomeIcon from '@/assets/svg/home-icon'
import ProfileIcon from '@/assets/svg/profile-icon'
import SortIcon from '@/assets/svg/sort-icon'

const MobileNavigation = memo(() => {
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.hash.split('/')[1]
    return MobileNavigate[path as any] as unknown as number
  })

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

  const handleNavigateClick = (index: number) => {
    setActiveTab(index)

    switch (index) {
      case MobileNavigate.main:
        navigate('/main')
        return
      case MobileNavigate.list:
        navigate('/list')
        return
      case MobileNavigate.profile:
        navigate('/profile/list')
        return
    }
  }

  return (
    (
      <MobileNavigationWrapper>
        <div className="m-navigation">
          {mobileNavigateList.map((item, index) => (
            <div
              className={classNames([
                'm-navigation-icon',
                { active: activeTab === index}
              ])}
              key={item.id}
              onClick={() => handleNavigateClick(item.id)}
            >
              {renderSvgIcon(index)}
            </div>
          ))}
        </div>
      </MobileNavigationWrapper>
    )
  )
})

export default MobileNavigation
