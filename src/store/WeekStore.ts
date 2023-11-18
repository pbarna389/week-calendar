import { configureStore } from '@reduxjs/toolkit'
import { weatherAPI } from '../hooks'

import weekSlice from '../features/weekSlice'

export const calendarStore = configureStore({
  reducer: {
    testSlice: weekSlice,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(), weatherAPI.middleware],
})


export type RootState = ReturnType<typeof calendarStore.getState>

export type AppDispatch = typeof calendarStore.dispatch