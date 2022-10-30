import { FC, useState, createContext, useContext, PropsWithChildren } from 'react'
import { tabsEnum } from '@/enum'

interface IProps {
  tabIndex: number
  changeTabIndex: (index: number) => void
  resetTabIndex: () => void
  getTabsPath: (value: number) => string
}

const TabContext = createContext<IProps>({} as IProps)

export const useTabContext = () => useContext(TabContext)

const TabContextProvider: FC<PropsWithChildren> = function ({ children }) {
  const [tabIndex, setTabIndex] = useState(tabsEnum.all)
  const changeTabIndex = (index: number) => setTabIndex(index)
  const resetTabIndex = () => setTabIndex(tabsEnum.all)
  const getTabsPath = (value: number) => {
    switch (value) {
      case tabsEnum.all:
        return 'all'
      case tabsEnum.track:
        return 'track'
      default:
        return ''
    }
  }

  return (
    <TabContext.Provider value={{
      tabIndex,
      changeTabIndex,
      resetTabIndex,
      getTabsPath
    }}>
      {children}
    </TabContext.Provider>
  )
}

export default TabContextProvider
