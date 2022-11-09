import { createContext, useContext, ComponentType } from 'react'

import { useParams, Params, useLocation, Location } from 'react-router-dom'

type IRouterInfoType = Params & Location

const RouterInfo = createContext<IRouterInfoType>({} as IRouterInfoType)

export const useRouterInfo = () => useContext(RouterInfo)

export default function RouterProvider(OriginCpn: ComponentType) {
  return function(props: any) {
    const params = useParams()
    const location = useLocation()
    return (
      <RouterInfo.Provider value={{
        ...params,
        ...location
      }}>
        <OriginCpn {...props} />
      </RouterInfo.Provider>
    )
  }
}
