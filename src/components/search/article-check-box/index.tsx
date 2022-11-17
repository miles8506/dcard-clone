import { memo, FC } from 'react'

import { ArticleCheckBoxWrapper } from './style'
import CorrectIcon from '@/assets/svg/correct-icon'

interface IProps {
  isChecked: boolean
  onChangeStatus: (value: boolean) => void
  value?: string
}

const CheckBox: FC<IProps> = memo(({ isChecked, onChangeStatus, value = '' }) => {
  return (
    <ArticleCheckBoxWrapper
      isChecked={isChecked}
      onClick={() => onChangeStatus(!isChecked)}
    >
      <div className="check-box">
        <CorrectIcon width={14} height={14} />
      </div>
      <div className="label">
        { value }
      </div>
    </ArticleCheckBoxWrapper>
  )
})

export default CheckBox
