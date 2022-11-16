import { createContext, useContext, ComponentType } from 'react'
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
          <MobileNavigateProvider>
            <TabContextProvider>
              <OriginComponent />
            </TabContextProvider>
          </MobileNavigateProvider>
        </FilterSelectProvider>
      </MainContext.Provider>
    )
  }
}

export default MainContextProvider
