import { memo } from 'react'

import RouterProvider from '@/context/router-info-context'

import { SearchWrapper } from './style'
import Header from '@/components/search/header'
import MainLoadBoard from '@/components/search/main-load-board'

const Search = memo(() => {
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
