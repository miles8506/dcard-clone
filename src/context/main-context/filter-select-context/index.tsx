import { FC, createContext, useContext, PropsWithChildren, useState } from 'react'
import { selectFilterEnum } from '@/enum'

interface IFilterSelectContext {
  currentStatusIndex: number
  changeStatusIndex: (index: number) => void
  resetStatusIndex: () => void
  getStatusPath: (value: number) => string
}

const FilterSelectContext = createContext<IFilterSelectContext>({} as IFilterSelectContext)

export const useFilterSelectContext = () => useContext(FilterSelectContext)

const FilterSelectProvider: FC<PropsWithChildren> = function ({ children }) {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(selectFilterEnum.hot)
  const changeStatusIndex = (index: number) => setCurrentStatusIndex(index)
  const resetStatusIndex = () => setCurrentStatusIndex(selectFilterEnum.hot)
  const getStatusPath = (value: number) => {
    switch (value) {
      case selectFilterEnum.hot:
        return 'hot'
      case selectFilterEnum.new:
        return 'new'
      default:
        return ''
    }
  }

  return (
    <FilterSelectContext.Provider
      value={{
        currentStatusIndex,
        changeStatusIndex,
        resetStatusIndex,
        getStatusPath
      }}
    >
      {children}
    </FilterSelectContext.Provider>
  )
}

export default FilterSelectProvider