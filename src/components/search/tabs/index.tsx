import { memo, useState } from 'react'

import { SearchTab } from '@/enum'
import { useRouterInfo } from '@/context/router-info-context'

import { TabsWrapper } from './style'
import MSTab from '@/base-ui/MSTab'
import MSTabs from '@/base-ui/MSTabs'
import { Outlet, useNavigate } from 'react-router-dom'

const Tabs = memo(() => {
  const navigate = useNavigate()

  const { pathname } = useRouterInfo()

  const [tabIndex, setTabIndex] = useState<string>(() => {
    const pathList = pathname.split('/')
    return pathList[pathList.length - 1]
  })

  const handleChange = (newValue: string) => {
    setTabIndex(newValue)
    navigate(`/search/${newValue}`)
  }

  return (
    <TabsWrapper>
      <div className="tabs">
        <div className="tabs-top">
          <MSTab value={tabIndex} onChange={handleChange}>
            <MSTabs label="綜合" id={SearchTab.synthesize} />
            <MSTabs label="文章" id={SearchTab.article} />
            <MSTabs label="看板" id={SearchTab.board} />
          </MSTab>
        </div>
        <div className="tabs-content">
          <Outlet />
        </div>
      </div>
    </TabsWrapper>
  )
})

export default Tabs
