import { createSlice } from "@reduxjs/toolkit";

interface DailyInter {
  currentDate: string
  weatherCode: number
}

interface WeekInitalStateInter {
  daily: DailyInter | null
}

const initialState: WeekInitalStateInter = {
  daily: null
}

const weekSlice = createSlice(
  {
    name: "WeekSlice",
    initialState,
    reducers: {
      log: (state) => {
        console.log(state)
      },
      overwrite: (state, action) => {
        state.daily = action.payload.newDaily
      }
    }
  }
)

export const { log, overwrite } = weekSlice.actions

export default weekSlice.reducer