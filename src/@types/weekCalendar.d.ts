import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface DailyInter {
  currentDate: string
  weatherCode: number
}

export interface DayInitalStateInter {
  daily: DailyInter | null
}

export type PayloadType<T> = {
  payload: {
    newDaily: T
  }
}

export type DayPayload = PayloadType<DailyInter>

type DispatchType<T> = ActionCreatorWithPayload<T> 

interface DispatchGeneric {
  newDaily: DailyInter
}

export interface StoreValueInter {
    dispatch: {
      addDayData: DispatchType<DispatchGeneric, string>
    };
}