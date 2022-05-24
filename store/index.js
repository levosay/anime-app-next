import {configureStore} from '@reduxjs/toolkit'
import {reducer} from './favorite'

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
