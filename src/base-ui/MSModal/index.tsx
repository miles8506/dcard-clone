import { memo, FC } from 'react'

import './modal-global-style.scss'

import { Modal, ModalProps } from 'antd'

const MSModal: FC<ModalProps> = memo((props) => {
  return (
      <Modal { ...props } className='ms-ant-modal'
    />
  )
})

export default MSModal
