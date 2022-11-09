import { FC, createContext, useContext, PropsWithChildren } from 'react'
import SearchProvider from './search-context'
import TabContextProvider from './tab-context/index'
import FilterSelectProvider from './filter-select-context'

const MainContext = createContext(null)

export const useMainContext = () => useContext(MainContext)

const MainContextProvider: FC<PropsWithChildren> = function ({ children }) {
  return (
    <MainContext.Provider value={null}>
      <FilterSelectProvider>
        <SearchProvider>
          <TabContextProvider>{children}</TabContextProvider>
        </SearchProvider>
      </FilterSelectProvider>
    </MainContext.Provider>
  )
}

export default MainContextProvider
