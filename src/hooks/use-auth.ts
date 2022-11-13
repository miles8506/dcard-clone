import { useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'
import { emptyUserInfo } from '@/store/login'

import { MSSessionStore } from '@/utils'
import { useDispatch } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'
import { changeLoginStatus } from '@/store/login'
import { requestUserInfo } from '@/store/login/async-thunk'

export const isAuth = () => !!MSSessionStore.getItem('loginInfo')

export default function useAuth() {
  const dispatch: ReduxDispatchType = useDispatch()
  const { pathname } = useRouterInfo()

  useEffect(() => {
    const _isAuth = isAuth()
    dispatch(changeLoginStatus(_isAuth))
    _isAuth ? dispatch(requestUserInfo()) : dispatch(emptyUserInfo)
  }, [pathname])
}
