import { configureStore } from '@reduxjs/toolkit'
import { weatherAPI } from '../hooks'

import daySlice from '../features/daySlice'

export const calendarStore = configureStore({
  reducer: {
    testSlice: daySlice,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(), weatherAPI.middleware],
})


export type RootState = ReturnType<typeof calendarStore.getState>

export type AppDispatch = typeof calendarStore.dispatch