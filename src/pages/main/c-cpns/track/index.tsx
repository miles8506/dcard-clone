import { memo } from 'react'

import { useRouterInfo } from '@/context/router-info-context'

import { TrackWrapper } from './style'

const Track = memo(() => {
  const { sort, status } = useRouterInfo()

  return (
    <TrackWrapper>
      <h2>{status}</h2>
    </TrackWrapper>
  )
})

export default Track
