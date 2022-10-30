import { memo } from 'react'

import { useRouterInfo } from '@/context/router-info-context'
import { useTabContext } from '@/context/main-context/tab-context'

import { TabsWrapper } from './style'
import { Outlet, useNavigate } from 'react-router-dom'
import MSTab from '@/base-ui/MSTab'
import MSTabs from '@/base-ui/MSTabs'
import FilterSelect from '../filter-select'

const Tabs = memo(() => {
  const navigate = useNavigate()
  const { tabIndex, changeTabIndex } = useTabContext()
  const { sort } = useRouterInfo()

  const handleChange = (newValue: number) => {
    changeTabIndex(newValue)
    newValue === 0 ? navigate(`/main/${sort}/all`) : navigate(`/main/${sort}/track`)
  };

  return (
    <TabsWrapper>
      <div className="tabs">
        <div className="tabs-top">
          <MSTab value={tabIndex} onChange={handleChange}>
            <MSTabs label='全部' id={0} />
            <MSTabs label='追蹤' id={1} />
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
