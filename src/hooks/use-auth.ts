import { useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import { MSSessionStore } from '@/utils'
import { useDispatch } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'
import { changeLoginStatus } from '@/store/login'
import { requestUserInfo } from '@/store/login/async-thunk'

export default function useAuth() {
  const isAuth = () => !!MSSessionStore.getItem('loginInfo')

  const dispatch: ReduxDispatchType = useDispatch()
  const { pathname } = useRouterInfo()
  useEffect(() => {
    const _isAuth = isAuth()
    dispatch(changeLoginStatus(_isAuth))
    if (_isAuth) dispatch(requestUserInfo())
  }, [pathname])
}
