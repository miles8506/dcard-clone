import { FC, memo } from 'react'

import { RecordItemWrapper } from './style'

interface IProps {
  record: string
}

const RecordItem: FC<IProps> = memo(({ record }) => {
  return (
    <RecordItemWrapper>
      {record}
    </RecordItemWrapper>
  )
})

export default RecordItem
