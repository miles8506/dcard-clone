import { memo, useState, useEffect, useCallback } from 'react'

import type { ReduxDispatchType, ReduxStateType } from '@/store'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { requestHotBoard } from '@/store/main/async-thunk'
import { usePostContext } from '@/context/post-context'

import { SelectBarWrapper } from './style'
import ArrowDownIcon from '@/assets/svg/arrow-down-icon'
import PointIcon from '@/assets/svg/point-icon'
import MSModal from '@/base-ui/MSModal'
import BoardModal from '../boardModal'
import RuleModal from '../RuleModal'

const SelectBar = memo(() => {
  const dispatch: ReduxDispatchType = useDispatch()
  const { hotBoardList } = useSelector(
    (state: ReduxStateType) => ({
      hotBoardList: state.main.hotBoardList
    }),
    shallowEqual
  )

  const { boardIndex } = usePostContext()

  const [isShowBoardModal, setIsShowBoardModal] = useState(false)
  const [isShowRuleModal, setIsShowRuleModal] = useState(false)

  const closeBoardModal = useCallback(() => {
    setIsShowBoardModal(false)
  }, [setIsShowBoardModal])

  const closeRuleModal = useCallback(() => {
    setIsShowRuleModal(false)
  }, [setIsShowRuleModal])

  useEffect(() => {
    dispatch(requestHotBoard())
  }, [])

  return (
    <SelectBarWrapper>
      <div className="select-bar">
        <div
          className="select-bar__box"
          onClick={() => setIsShowBoardModal(true)}
        >
          <span className="text">
            {boardIndex !== null ? hotBoardList[boardIndex].name : '點此選擇發文看板'}
          </span>
          <span className="arrow-down-icon">
            <ArrowDownIcon width="18" height="18" />
          </span>
        </div>
        <div className="select-bar__rule" onClick={() => setIsShowRuleModal(true)}>
          <span className="point-icon">
            <PointIcon />
          </span>
          <span className="text">
            發文規則
          </span>
        </div>
      </div>
      <MSModal
        open={isShowBoardModal}
        onCancel={closeBoardModal}
        style={{
          top: 'calc(50% - 306px)',
          borderRadius: '12px'
        }}
      >
        <BoardModal
          hotBoardList={hotBoardList}
          closeBoardModal={closeBoardModal}
        />
      </MSModal>
      <MSModal
        open={isShowRuleModal}
        onCancel={closeRuleModal}
        width='720px'
        style={{
          top: 'calc(50% - 328px)',
          borderRadius: '12px'
        }}
      >
        <RuleModal closeRuleModal={closeRuleModal} />
      </MSModal>
    </SelectBarWrapper>
  )
})

export default SelectBar
