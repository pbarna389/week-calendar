import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const wednesdaySlice = createSlice(
  {
    name: "WednesdaySlice",
    initialState,
    reducers: {
      ADD_WEDNESDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_WEDNESDAY_DATA } = wednesdaySlice.actions

export default wednesdaySlice.reducer