import { FC, createContext, useContext, PropsWithChildren, useState } from 'react'
import { selectFilterEnum } from '@/enum'

interface IFilterSelectContext {
  currentStatusIndex: number
  changeStatusIndex: (index: number) => void
  resetStatusIndex: () => void
}

const FilterSelectContext = createContext<IFilterSelectContext>({} as IFilterSelectContext)

export const useFilterSelectContext = () => useContext(FilterSelectContext)

const FilterSelectProvider: FC<PropsWithChildren> = function ({ children }) {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0)
  const changeStatusIndex = (index: number) => setCurrentStatusIndex(index)
  const resetStatusIndex = () => setCurrentStatusIndex(selectFilterEnum.hot)

  return (
    <FilterSelectContext.Provider
      value={{
        currentStatusIndex,
        changeStatusIndex,
        resetStatusIndex,
      }}
    >
      {children}
    </FilterSelectContext.Provider>
  )
}

export default FilterSelectProvider