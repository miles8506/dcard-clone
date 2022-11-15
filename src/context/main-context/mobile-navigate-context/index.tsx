import { FC, createContext, useContext, PropsWithChildren, useState } from 'react'

interface IMobileNavigateContext {
  navigateCurrentIndex: number
  changeNavigateCurrentIndex: (value: number) => void
}

const MobileNavigate = createContext<IMobileNavigateContext>({} as IMobileNavigateContext)

export const useMobileNavigateContext = () => useContext(MobileNavigate)

const MobileNavigateProvider: FC<PropsWithChildren> = function ({ children }) {
  const [navigateCurrentIndex, setNavigateCurrentIndex] = useState(0)
  const changeNavigateCurrentIndex = (index: number) => setNavigateCurrentIndex(index)

  return (
    <MobileNavigate.Provider
      value={{
        navigateCurrentIndex,
        changeNavigateCurrentIndex
      }}
    >
      {children}
    </MobileNavigate.Provider>
  )
}

export default MobileNavigateProvider
