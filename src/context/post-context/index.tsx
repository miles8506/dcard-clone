import { FC, PropsWithChildren, createContext, useContext, useState, useRef, RefObject } from 'react'
import type { IHandle } from '@/base-ui/MSEditor'

interface IPostContext {
  boardIndex: number | null
  MSEditorRef: RefObject<IHandle>
  postDateTime: string
  title: string
  changeBoardIndex: (index: number) => void
  changePostDateTime: (value: string) => void
  changeTitle: (value: string) => void
}

const PostContext = createContext<IPostContext>({} as IPostContext)

export const usePostContext = () => useContext(PostContext)

const PostContextProvider: FC<PropsWithChildren> = function ({ children }) {
  const [boardIndex, setBoardIndex] = useState<number | null>(null)
  const changeBoardIndex = (index: number) => setBoardIndex(index)

  const MSEditorRef = useRef<IHandle>(null)

  const [title, setTitle] = useState('')
  const changeTitle = (value: string) => setTitle(value)

  const [postDateTime, setPostDateTime] = useState<string>('')
  const changePostDateTime = (value: string) => setPostDateTime(value)

  return (
    <PostContext.Provider
      value={{
        boardIndex,
        MSEditorRef,
        postDateTime,
        title,
        changeBoardIndex,
        changePostDateTime,
        changeTitle
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
