import {
  FC,
  memo,
  PropsWithChildren,
  CSSProperties,
  ButtonHTMLAttributes
} from 'react'

import { MSButtonWrapper } from './style'

interface IProps {
  sx?: CSSProperties
  msDisabled?: string
  bgHoverColor?: string
  isLoading?: boolean
}

const MSButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & IProps>
> = memo(
  ({
    sx,
    children,
    msDisabled = '',
    onClick,
    bgHoverColor = '',
    isLoading = false
  }) => {
    return (
      <MSButtonWrapper msDisabled={msDisabled} bgHoverColor={bgHoverColor}>
        <button
          className="ms-button"
          style={sx}
          disabled={msDisabled === 'disabled'}
          onClick={onClick}
        >
          {isLoading && (
            <div className="ms-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          <span className="text">{children}</span>
        </button>
      </MSButtonWrapper>
    )
  }
)

export default MSButton
