import { memo, useState } from 'react'

import { TabsWrapper } from './style'
import MSTab from '@/base-ui/MSTab'
import MSTabs from '@/base-ui/MSTabs'

const Tabs = memo(() => {
  const [tabIndex, setTabIndex] = useState(0)
  const changeIndex = (newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <TabsWrapper>
      <div className="tabs">
        <div className="tabs-top">
          <MSTab value={tabIndex} onChange={changeIndex}>
            <MSTabs label='文章' id={0} />
          </MSTab>
        </div>
      </div>
    </TabsWrapper>
  )
})

export default Tabs
