import { memo, useEffect, useState } from 'react'

import RouterProvider from '@/context/router-info-context'
import useWindowRWD from '@/hooks/use-window-rwd'

import { SearchWrapper } from './style'
import Header from '@/components/search/header'
import MainLoadBoard from '@/components/search/main-load-board'

const Search = memo(() => {
  const { size } = useWindowRWD()

  const [isShowHeader, setIsShowHeader] = useState(false)

  useEffect(() => {
    (size.width < 996) ? setIsShowHeader(false) : setIsShowHeader(true)
  }, [size.width])

  return (
    <SearchWrapper>
      <div className="search">
        { isShowHeader && <Header />}
        <MainLoadBoard isShowHeader={isShowHeader} />
      </div>
    </SearchWrapper>
  )
})

export default RouterProvider(Search)
