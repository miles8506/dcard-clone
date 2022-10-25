import { FC, createContext, useContext, PropsWithChildren } from 'react'
import SearchProvider from './search-context'
import TabContextProvider from './tab-context/index'

const MainContext = createContext({})

export const useMainContext = () => useContext(MainContext)

const MainContextProvider: FC<PropsWithChildren> = function({ children }) {

  return (
    <MainContext.Provider value={{}}>
      <SearchProvider>
        <TabContextProvider>
          {children}
        </TabContextProvider>
      </SearchProvider>
    </MainContext.Provider>
  )
}

export default MainContextProvider
