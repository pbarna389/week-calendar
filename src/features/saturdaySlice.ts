import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: []
}

const saturdaySlice = createSlice(
  {
    name: "SaturdaySlice",
    initialState,
    reducers: {
      ADD_SATURDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      },
      ADD_SATURDAY_TODO: (state, action: DayPayload) => {
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_SATURDAY_DATA, ADD_SATURDAY_TODO } = saturdaySlice.actions

export default saturdaySlice.reducer