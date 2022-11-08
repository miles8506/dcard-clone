import { memo } from 'react'

import { useRouterInfo } from '@/context/router-info-context'

import { TrackWrapper } from './style'

const Track = memo(() => {
  const { sort, status } = useRouterInfo()

  return (
    <TrackWrapper>
    </TrackWrapper>
  )
})

export default Track
