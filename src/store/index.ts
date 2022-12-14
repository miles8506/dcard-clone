import { configureStore } from '@reduxjs/toolkit'
import { default as mainReducer } from './main'
import { default as loginReducer } from './login'
import { default as articleReducer } from './article'

const store = configureStore({
  reducer: {
    main: mainReducer,
    login: loginReducer,
    article: articleReducer
  }
})

export default store
export type ReduxStateType = ReturnType<typeof store.getState>
export type ReduxDispatchType = typeof store.dispatch
