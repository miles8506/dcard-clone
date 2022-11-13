import {
  createContext,
  useContext,
  useRef,
  RefObject,
  ComponentType
} from 'react'
import { IProps } from '@/components/article'

interface IArticleContext {
  articleRef: RefObject<HTMLDivElement>
}

const ArticleContext = createContext<IArticleContext>({} as IArticleContext)

export const useArticleContext = () => useContext(ArticleContext)

const ArticleProvider = function (OriginComponent: ComponentType<IProps>) {
  return function (props: IProps) {
    const articleRef = useRef<HTMLDivElement>(null)

    return (
      <ArticleContext.Provider
        value={{
          articleRef
        }}
      >
        <OriginComponent { ...props } />
      </ArticleContext.Provider>
    )
  }
}

export default ArticleProvider
