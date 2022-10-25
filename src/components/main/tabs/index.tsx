import { memo, SyntheticEvent } from 'react'

import { useRouterInfo } from '@/context/router-info-context'
import { useTabContext } from '@/context/main-context/tab-context'

import { TabsWrapper } from './style'
import { Outlet, useNavigate } from 'react-router-dom'
import MSTabs from '@/base-ui/MSTabs'
import MSTab from '@/base-ui/MSTab'

const Tabs = memo(() => {
  const navigate = useNavigate()
  const { tabIndex, changeTabIndex } = useTabContext()
  const { sort } = useRouterInfo()

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    changeTabIndex(newValue)
    newValue === 0 ? navigate(`/main/${sort}/all`) : navigate(`/main/${sort}/curation`)
  };

  return (
    <TabsWrapper>
      <MSTabs value={tabIndex} onChange={handleChange}>
        <MSTab label="All" id="0"></MSTab>
        <MSTab label="Curation" id="1"></MSTab>
      </MSTabs>
      <Outlet />
    </TabsWrapper>
  )
})

export default Tabs
