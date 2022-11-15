import { memo } from 'react'

import { SynthesizeWrapper } from './style'
import BoardBanner from '@/components/search/board-banner'

const Synthesize = memo(() => {
  return (
    <SynthesizeWrapper>
      <BoardBanner />
    </SynthesizeWrapper>
  )
})

export default Synthesize
