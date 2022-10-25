import { memo, FC } from 'react'

import { Tab, TabProps } from '@mui/material'

const MSTab: FC<TabProps> = memo((props) => {
  return <Tab {...props} />
})

export default MSTab
