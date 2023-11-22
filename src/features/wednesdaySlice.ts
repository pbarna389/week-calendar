import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: [],
}

const wednesdaySlice = createSlice(
  {
    name: "WednesdaySlice",
    initialState,
    reducers: {
      ADD_WEDNESDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      },
      ADD_WEDNESDAY_TODO: (state, action: DayPayload) => {
        console.log(action.payload.addTodo)
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_WEDNESDAY_DATA, ADD_WEDNESDAY_TODO } = wednesdaySlice.actions

export default wednesdaySlice.reducer