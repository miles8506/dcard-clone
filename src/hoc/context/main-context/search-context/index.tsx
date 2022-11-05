import { FC, useState, PropsWithChildren, createContext, useContext } from 'react'

interface ISearchContext {
  searchValue: string
  changeSearchValue: (val: string) => void
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext)
export const useSearchContext = () => useContext(SearchContext)

const SearchProvider: FC<PropsWithChildren> = function({ children }) {
  const [searchValue, setSearchValue] = useState('')
  const changeSearchValue = (val: string) => setSearchValue(val)

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        changeSearchValue
      }}
    >
      { children }
    </SearchContext.Provider>
  )
}

export default SearchProvider
