import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const fridaySlice = createSlice(
  {
    name: "FridaySlice",
    initialState,
    reducers: {
      ADD_FRIDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_FRIDAY_DATA } = fridaySlice.actions

export default fridaySlice.reducer