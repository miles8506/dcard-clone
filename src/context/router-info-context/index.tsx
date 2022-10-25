import { createContext, useContext, ComponentType } from 'react'

import { useParams, Params } from 'react-router-dom'

const RouterInfo = createContext<Params>({} as Params)

export const useRouterInfo = () => useContext(RouterInfo)

export default function RouterProvider(OriginCpn: ComponentType) {

  return function(props: any) {
    const params = useParams()

    return (
      <RouterInfo.Provider value={{
        ...params
      }}>
        <OriginCpn {...props} />
      </RouterInfo.Provider>
    )
  }
}
