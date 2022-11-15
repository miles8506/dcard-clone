import { createContext, useContext, ComponentType } from 'react'
import SearchProvider from './search-context'
import TabContextProvider from './tab-context/index'
import FilterSelectProvider from './filter-select-context'
import MobileNavigateProvider from './mobile-navigate-context'

const MainContext = createContext(null)

export const useMainContext = () => useContext(MainContext)

const MainContextProvider = function (OriginComponent: ComponentType<any>) {
  return function () {
    return (
      <MainContext.Provider value={null}>
        <FilterSelectProvider>
          <SearchProvider>
            <MobileNavigateProvider>
              <TabContextProvider>
                <OriginComponent />
              </TabContextProvider>
            </MobileNavigateProvider>
          </SearchProvider>
        </FilterSelectProvider>
      </MainContext.Provider>
    )
  }
}

export default MainContextProvider
