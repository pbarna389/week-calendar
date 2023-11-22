import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: [],
}

const sundaySlice = createSlice(
  {
    name: "SundaySlice",
    initialState,
    reducers: {
      ADD_SUNDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      },
      ADD_SUNDAY_TODO: (state, action: DayPayload) => {
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_SUNDAY_DATA, ADD_SUNDAY_TODO } = sundaySlice.actions

export default sundaySlice.reducer