import { useEffect } from 'react'

import { MSSessionStore } from '@/utils'
import { useDispatch } from 'react-redux'
import { useRouterInfo } from '@/context/router-info-context'
import { changeLoginStatus } from '@/store/login'

export default function useAuth() {
  const isAuth = () => !!MSSessionStore.getItem('loginInfo')

  const dispatch = useDispatch()
  const { pathname } = useRouterInfo()

  useEffect(() => {
    const _isAuth = isAuth()
    dispatch(changeLoginStatus(_isAuth))
  }, [pathname])
}
