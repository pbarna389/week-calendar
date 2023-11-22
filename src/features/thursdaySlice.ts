import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const thursdaySlice = createSlice(
  {
    name: "ThursdaySlice",
    initialState,
    reducers: {
      ADD_THURSDAY_DATA: (state, action: DayPayload) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_THURSDAY_DATA } = thursdaySlice.actions

export default thursdaySlice.reducer