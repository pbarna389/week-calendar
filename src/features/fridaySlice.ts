import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: [],
}

const fridaySlice = createSlice(
  {
    name: "FridaySlice",
    initialState,
    reducers: {
      ADD_FRIDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      },
      ADD_FRIDAY_TODO: (state, action: DayPayload) => {
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_FRIDAY_DATA, ADD_FRIDAY_TODO } = fridaySlice.actions

export default fridaySlice.reducer