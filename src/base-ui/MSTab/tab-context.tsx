import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  ComponentType
} from 'react'

import type { IProps } from '.'

const TabContext = createContext<IProps>({} as IProps)

export const useTabContext = () => useContext(TabContext)

const MSTabProvider = function (OriginComponent: ComponentType<any>) {
  const Tab: FC<PropsWithChildren<IProps>> = function ({
    value,
    onChange,
    children
  }) {
    return (
      <TabContext.Provider
        value={{
          value,
          onChange
        }}
      >
        <OriginComponent>{children}</OriginComponent>
      </TabContext.Provider>
    )
  }

  return Tab
}

export default MSTabProvider
