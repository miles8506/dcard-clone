import { FC, PropsWithChildren, createContext, useContext, useState, useRef, MutableRefObject } from 'react'

interface IPostContext {
  boardIndex: number | null
  changeBoardIndex: (index: number) => void
  MSEditorRef: MutableRefObject<any>
}

const PostContext = createContext<IPostContext>({} as IPostContext)

export const usePostContext = () => useContext(PostContext)

const PostContextProvider: FC<PropsWithChildren> = function ({ children }) {
  const [boardIndex, setBoardIndex] = useState<number | null>(null)
  const changeBoardIndex = (index: number) => setBoardIndex(index)
  const MSEditorRef = useRef<any>(null)

  return (
    <PostContext.Provider
      value={{
        boardIndex,
        changeBoardIndex,
        MSEditorRef
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
