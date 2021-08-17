import { configureStore } from '@reduxjs/toolkit'

import locationHistoryReducer from './reducers/locationHistory.reducer'

const store = configureStore({
  reducer: {
    locationHistory: locationHistoryReducer,
  },
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
