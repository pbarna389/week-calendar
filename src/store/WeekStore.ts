import { configureStore } from '@reduxjs/toolkit'
import { weatherAPI } from '../hooks'

import mondaySlice from '../features/mondaySlice'
import tuesdaySlice from '../features/tuesdaySlice'
import wednesdaySlice from '../features/wednesdaySlice'
import thursdaySlice from '../features/thursdaySlice'
import fridaySlice from '../features/fridaySlice'
import saturdaySlice from '../features/saturdaySlice'
import sundaySlice from '../features/sundaySlice'
import editSlice from '../features/editSlice'

export const calendarStore = configureStore({
  reducer: {
    mondaySlice,
    tuesdaySlice,
    wednesdaySlice,
    thursdaySlice,
    fridaySlice,
    saturdaySlice,
    sundaySlice,
    editSlice,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(), weatherAPI.middleware],
})


export type RootState = ReturnType<typeof calendarStore.getState>

export type AppDispatch = typeof calendarStore.dispatch