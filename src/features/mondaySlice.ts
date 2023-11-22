import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: [],
}

const mondaySlice = createSlice(
  {
    name: "MondaySlice",
    initialState,
    reducers: {
      ADD_MONDAY_DATA: (state, action: DayPayload) => {
        console.log('HAPPENING')
        state.daily = action.payload.newDaily
      },
      ADD_MONDAY_TODO: (state, action: DayPayload) => {
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_MONDAY_DATA, ADD_MONDAY_TODO } = mondaySlice.actions

export default mondaySlice.reducer