import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface DailyInter {
  currentDate: string
  weatherCode: number
}

export interface DayInitalStateInter {
  daily: DailyInter | null
  todos: TodoInter[]
}

interface TodoInter {
  name: string
  priority: string
}

export type PayloadType<T1, T2> = {
  payload: {
    newDaily: T1,
    addTodo: T2 
  }
}

export type DayPayload = PayloadType<DailyInter, TodoInter>

type DispatchType<T> = ActionCreatorWithPayload<T> 

interface DispatchGeneric {
  newDaily: DailyInter,
  todos: TodoInter[],
}

export interface StoreValueInter {
    dispatch: {
      addDayData: DispatchType<DispatchGeneric, string>
      addTodo: DispatchType<DispatchGeneric, string>
    };
}