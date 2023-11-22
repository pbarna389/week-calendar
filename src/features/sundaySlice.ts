import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const sundaySlice = createSlice(
  {
    name: "SundaySlice",
    initialState,
    reducers: {
      ADD_SUNDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_SUNDAY_DATA } = sundaySlice.actions

export default sundaySlice.reducer