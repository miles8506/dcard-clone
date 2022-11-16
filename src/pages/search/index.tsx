import { memo, useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import RouterProvider from '@/context/router-info-context'
import { useDispatch } from 'react-redux'
import { requestArticleList } from '@/store/article/async-thunk'

import { SearchWrapper } from './style'
import Header from '@/components/search/header'
import MainLoadBoard from '@/components/search/main-load-board'

const Search = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()

  useEffect(() => {
    dispatch(requestArticleList())
  }, [])

  return (
    <SearchWrapper>
      <div className="search">
        <Header />
        <MainLoadBoard />
      </div>
    </SearchWrapper>
  )
})

export default RouterProvider(Search)
