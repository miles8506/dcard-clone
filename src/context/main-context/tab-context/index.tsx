import { FC, useState, createContext, useContext, PropsWithChildren } from 'react'

interface IProps {
  tabIndex: number
  changeTabIndex: (index: number) => void
  resetTabIndex: () => void
}

const TabContext = createContext<IProps>({} as IProps)

export const useTabContext = () => useContext(TabContext)

const TabContextProvider: FC<PropsWithChildren> = function ({ children }) {
  const [tabIndex, setTabIndex] = useState(0)
  const changeTabIndex = (index: number) => setTabIndex(index)
  const resetTabIndex = () => setTabIndex(0)

  return (
    <TabContext.Provider value={{
      tabIndex,
      changeTabIndex,
      resetTabIndex
    }}>
      {children}
    </TabContext.Provider>
  )
}

export default TabContextProvider
