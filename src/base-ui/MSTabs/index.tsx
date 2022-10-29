import { memo, FC, useState, useEffect, useCallback } from 'react'

import { MSTabsWrapper } from './style'
import { useTabContext } from '../MSTab/tab-context'

interface IProps {
  label: string | number
  id: string | number
}

const MSTabs: FC<IProps> = memo(({ label, id }) => {
  const { value, onChange } = useTabContext()
  const [isActive, setIsActive] = useState(false)

  const handleClick = useCallback((id: string | number) => {
    return () => {
      if (!onChange) return
      onChange(id)
    }
  }, [onChange])

  useEffect(() => {
    setIsActive(value === id)
  }, [value])

  return (
    <MSTabsWrapper isActive={isActive}>
      <div className="ms-tabs" onClick={handleClick(id)}>
        <span className='ms-tabs-text'>{label}</span>
      </div>
    </MSTabsWrapper>
  )
})

export default MSTabs
