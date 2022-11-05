import { memo } from 'react'

import { useRouterInfo } from '@/context/router-info-context'
import { useTabContext } from '@/context/main-context/tab-context'
import { useFilterSelectContext } from '@/context/main-context/filter-select-context'

import { TabsWrapper } from './style'
import { Outlet, useNavigate } from 'react-router-dom'
import MSTab from '@/base-ui/MSTab'
import MSTabs from '@/base-ui/MSTabs'
import FilterSelect from '../filter-select'

import { tabsEnum } from '@/enum'

const Tabs = memo(() => {
  const navigate = useNavigate()
  const { tabIndex, changeTabIndex, getTabsPath } = useTabContext()
  const { sort } = useRouterInfo()
  const { resetStatusIndex } = useFilterSelectContext()

  const handleChange = (newValue: number) => {
    changeTabIndex(newValue)
    resetStatusIndex()
    const tabsPath = getTabsPath(newValue)
    navigate(`/main/${sort}/${tabsPath}/hot`)
  }

  return (
    <TabsWrapper>
      <div className="tabs">
        <div className="tabs-top">
          <MSTab value={tabIndex} onChange={handleChange}>
            <MSTabs label="全部" id={tabsEnum.all} />
            <MSTabs label="追蹤" id={tabsEnum.track} />
          </MSTab>
          <div className="tabs-top-select">
            <FilterSelect />
          </div>
        </div>
        <div className="tabs-content">
          <Outlet />
        </div>
      </div>
    </TabsWrapper>
  )
})

export default Tabs
