import { configureStore } from '@reduxjs/toolkit'
import daySlice from '../features/daySlice'

export const calendarStore = configureStore({
  reducer: {
    testSlice: daySlice
  },
})


export type RootState = ReturnType<typeof calendarStore.getState>

export type AppDispatch = typeof calendarStore.dispatch