import {
  createContext,
  useContext,
  useRef,
  useState,
  RefObject,
  ComponentType
} from 'react'
import { ArticleFilter } from '@/enum'
import type { IProps } from '@/components/article'

interface IArticleContext {
  articleRef: RefObject<HTMLDivElement>
  filterSort: number
  changeFilterSort: (value: number) => void
}

const ArticleContext = createContext<IArticleContext>({} as IArticleContext)

export const useArticleContext = () => useContext(ArticleContext)

const ArticleProvider = function (OriginComponent: ComponentType<IProps>) {
  return function (props: IProps) {
    const articleRef = useRef<HTMLDivElement>(null)
    const [filterSort, setFilterSort] = useState(ArticleFilter.hot)
    const changeFilterSort = (value: number) => setFilterSort(value)

    return (
      <ArticleContext.Provider
        value={{
          articleRef,
          filterSort,
          changeFilterSort
        }}
      >
        <OriginComponent { ...props } />
      </ArticleContext.Provider>
    )
  }
}

export default ArticleProvider
