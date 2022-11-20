import { useEffect } from 'react'

import type { ReduxDispatchType } from '@/store'

import { emptyUserInfo } from '@/store/login'
import { MSSessionStore } from '@/utils'
import { useDispatch } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'
import { changeLoginStatus } from '@/store/login'
import { requestUserInfo } from '@/store/login/async-thunk'
import { LOGIN_INFO } from '@/constants'

export const isAuth = () => !!MSSessionStore.getItem(LOGIN_INFO)

export default function useAuth() {
  const dispatch: ReduxDispatchType = useDispatch()
  const { pathname } = useRouterInfo()

  useEffect(() => {
    const _isAuth = isAuth()
    dispatch(changeLoginStatus(_isAuth))
    _isAuth ? dispatch(requestUserInfo()) : dispatch(emptyUserInfo)
  }, [pathname])
}
