import { createSlice } from "@reduxjs/toolkit";
import { DayInitalStateInter, DayPayload } from "../@types/weekCalendar";

const initialState: DayInitalStateInter = {
  daily: null
}

const mondaySlice = createSlice(
  {
    name: "MondaySlice",
    initialState,
    reducers: {
      ADD_MONDAY_DATA: (state, action: DayPayload) => {
        console.log('HAPPENING')
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { ADD_MONDAY_DATA } = mondaySlice.actions

export default mondaySlice.reducer