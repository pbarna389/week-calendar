import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const saturdaySlice = createSlice(
  {
    name: "SaturdaySlice",
    initialState,
    reducers: {
      ADD_SATURDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_SATURDAY_DATA } = saturdaySlice.actions

export default saturdaySlice.reducer