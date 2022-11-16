import { useReducer, ChangeEvent } from 'react'

import type { ReduxDispatchType } from '@/store'

import { isEmpty, MSSessionStore, isEmail } from '@/utils'
import firebase from 'firebase'
import { requestCol, setQuery } from '@/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeLoginStatus } from '@/store/login'
import { requestUserInfo } from '@/store/login/async-thunk'
import type { IUserInfo } from '@/store/login/type'

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

type loginType = 'google' | 'facebook' | 'normal'

export function useLogin() {
  const reduxDispatch: ReduxDispatchType = useDispatch()
  const navigation = useNavigate()

  // form
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

  const changePasswordStatus = (value: boolean) => {
    dispatch({ type: CHANGE_PASSWORDSTATUS, passwordStatus: value })
  }

  const verifyInputValue = (type: 'account' | 'password') => {
    if (type === 'account') {
      const res = isEmpty(accountValue)
      const _isEmail = isEmail(state.accountValue)
      dispatch({ type: CHANGE_ACCOUNTSTATUS, accountStatus: (res || !_isEmail) ? true : false })
      return
    }
    if (type === 'password') {
      const res = isEmpty(passwordValue)
      dispatch({ type: CHANGE_PASSWORDSTATUS, passwordStatus: res ? true : false })
      return;
    }
  }


  // login
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const facebookProvider = new firebase.auth.FacebookAuthProvider()

  const handleUserInfo = async (payload: IUserInfo) => {
    const userList = await requestCol('user')
    const haveRegistry = userList.some((item: any) => item.data().account === payload.account)
    !haveRegistry && await setQuery('user', payload.account, payload)
    MSSessionStore.setItem('loginInfo', payload)
    navigation('/main')
    reduxDispatch(changeLoginStatus(true))
    reduxDispatch(requestUserInfo())
  }

  async function googleLogin() {
    const res = await firebase.auth().signInWithPopup(googleProvider)
    const payload: IUserInfo = {
      account: (res.user?.email as string).trim(),
      displayName: (res.user?.displayName as string),
      type: 'google',
      gender: Math.floor(Math.random() * 2),
      articleCollectList: [],
      articleLikeList: [],
      commentLikeList: []
    }
    handleUserInfo(payload)
  }

  async function facebookLogin() {
    const res = await firebase.auth().signInWithPopup(facebookProvider)
    const payload: IUserInfo = {
      account: (res.user?.email as string).trim(),
      displayName: (res.user?.displayName as string),
      type: 'facebook',
      gender: Math.floor(Math.random() * 2),
      articleCollectList: [],
      articleLikeList: [],
      commentLikeList: []
    }
    handleUserInfo(payload)
  }

  async function normalLogin() {
    verifyInputValue('account')
    verifyInputValue('password')
    if (state.accountStatus || state.passwordStatus) return
    const payload: IUserInfo = {
      account: state.accountValue.trim(),
      displayName: state.accountValue.trim(),
      type: 'normal',
      password: passwordValue.trim(),
      gender: Math.floor(Math.random() * 2),
      articleCollectList: [],
      articleLikeList: [],
      commentLikeList: []
    }
    const userList = await requestCol('user')
    const haveRegistry = userList.find((item: any) => item.data().account === payload.account)
    if (haveRegistry && haveRegistry.data().password !== passwordValue) {
      changePasswordStatus(true)
      return
    }
    !haveRegistry && await setQuery('user', payload.account, payload)
    delete payload.password
    if (haveRegistry?.data()) payload.gender = haveRegistry.data().gender
    MSSessionStore.setItem('loginInfo', payload)
    reduxDispatch(changeLoginStatus(true))
    reduxDispatch(requestUserInfo())
    navigation('/main')
  }


  return {
    state,
    changeAccountValue,
    changePasswordValue,
    verifyInputValue,
    googleLogin,
    facebookLogin,
    normalLogin
  }
}
