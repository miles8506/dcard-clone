import { createContext, useContext, ComponentType } from 'react'

import { useParams, Params, useLocation, Location, useSearchParams } from 'react-router-dom'

type IRouterInfoType = Params & Location & {[key: string]: string}

const RouterInfo = createContext<IRouterInfoType>({} as IRouterInfoType)

export const useRouterInfo = () => useContext(RouterInfo)

export default function RouterProvider(OriginCpn: ComponentType) {
  return function(props: any) {
    const params = useParams()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const _searchParams = Object.fromEntries(searchParams)

    return (
      <RouterInfo.Provider value={{
        ...params,
        ...location,
        ..._searchParams
      }}>
        <OriginCpn {...props} />
      </RouterInfo.Provider>
    )
  }
}
