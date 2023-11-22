import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: [],
}

const tuesdaySlice = createSlice(
  {
    name: "TuesdaySlice",
    initialState,
    reducers: {
      ADD_TUESDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      },
      ADD_TUESDAY_TODO: (state, action: DayPayload) => {
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_TUESDAY_DATA, ADD_TUESDAY_TODO } = tuesdaySlice.actions

export default tuesdaySlice.reducer