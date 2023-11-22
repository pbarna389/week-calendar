import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null,
  todos: [],
}

const thursdaySlice = createSlice(
  {
    name: "ThursdaySlice",
    initialState,
    reducers: {
      ADD_THURSDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      },
      ADD_THURSDAY_TODO: (state, action: DayPayload) => {
        state.todos = [...state.todos, action.payload.addTodo]
      }
    }
  }
)

export const { ADD_THURSDAY_DATA, ADD_THURSDAY_TODO } = thursdaySlice.actions

export default thursdaySlice.reducer