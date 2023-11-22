import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const tuesdaySlice = createSlice(
  {
    name: "TuesdaySlice",
    initialState,
    reducers: {
      ADD_TUESDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_TUESDAY_DATA } = tuesdaySlice.actions

export default tuesdaySlice.reducer