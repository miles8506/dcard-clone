import { FC, memo, PropsWithChildren, CSSProperties, ButtonHTMLAttributes } from 'react'

import { MSButtonWrapper } from './style'

interface IProps {
  sx?: CSSProperties
  msDisabled?: string
  bgHoverColor?: string
}

const MSButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & IProps>> = memo(({ sx, children, msDisabled = '', onClick, bgHoverColor = '' }) => {

  return (
    <MSButtonWrapper msDisabled={msDisabled} bgHoverColor={bgHoverColor}>
      <button
        className='ms-button'
        style={sx}
        disabled={msDisabled === 'disabled'}
        onClick={onClick}
      >
        { children }
      </button>
    </MSButtonWrapper>
  )
})

export default MSButton