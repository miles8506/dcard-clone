import { useReducer, ChangeEvent } from 'react'
import { isEmpty } from '@/utils'

const CHANGE_ACCOUNTVALUE = 'CHANGE_ACCOUNTVALUE'
const CHANGE_ACCOUNTSTATUS = 'CHANGE_ACCOUNTSTATUS'
const CHANGE_PASSWORDVALUE = 'CHANGE_PASSWORDVALUE'
const CHANGE_PASSWORDSTATUS = 'CHANGE_PASSWORDSTATUS'

interface IInitialState {
  accountValue: string
  accountStatus: boolean
  passwordValue: string
  passwordStatus: boolean
}

export function useLogin() {
  const initialState: IInitialState = {
    accountValue: '',
    accountStatus: false,
    passwordValue: '',
    passwordStatus: false
  }

  function reducer(state: IInitialState, action: any) {
    switch (action.type) {
      case CHANGE_ACCOUNTVALUE:
        return { ...state, accountValue: action.accountValue }
      case CHANGE_ACCOUNTSTATUS:
        return { ...state, accountStatus: action.accountStatus }
      case CHANGE_PASSWORDVALUE:
        return { ...state, passwordValue: action.passwordValue }
      case CHANGE_PASSWORDSTATUS:
        return { ...state, passwordStatus: action.passwordStatus }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const { accountValue, passwordValue } = state

  const changeAccountValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_ACCOUNTVALUE, accountValue: event.target.value })
  }

  const changePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_PASSWORDVALUE, passwordValue: event.target.value })
  }

  const verifyInputValue = (type: string) => {
    if (type === 'account') {
      const res = isEmpty(accountValue)
      dispatch({ type: CHANGE_ACCOUNTSTATUS, accountStatus: res ? true : false })
      return
    }
    if (type === 'password') {
      const res = isEmpty(passwordValue)
      dispatch({ type: CHANGE_PASSWORDSTATUS, passwordStatus: res ? true : false })
    }
  }

  return {
    state,
    changeAccountValue,
    changePasswordValue,
    verifyInputValue
  }
}
