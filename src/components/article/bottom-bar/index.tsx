import { memo, useCallback, useState } from 'react'

import { BottomBarWrapper } from './style'
import CommentInput from '../comment-input'
import DisplayArea from '../display-area'

const BottomBar = memo(() => {
  const [isShowDisplayArea, setIsShowDisplayArea] = useState(true)

  const changeIsShowDisplayArea = useCallback((value: boolean) => {
    setIsShowDisplayArea(value)
  },[setIsShowDisplayArea])

  return (
    <BottomBarWrapper isShowDisplayArea={isShowDisplayArea}>
      <div className="bottom-bar">
        {isShowDisplayArea ? (
          <DisplayArea changeIsShowDisplayArea={changeIsShowDisplayArea} />
        ) : (
          <CommentInput changeIsShowDisplayArea={changeIsShowDisplayArea} />
        )}
      </div>
    </BottomBarWrapper>
  )
})

export default BottomBar
