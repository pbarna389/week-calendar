import { createSlice } from "@reduxjs/toolkit";

interface WeekInitalStateInter {
  message: string
}

const initialState: WeekInitalStateInter = {
  message: "ALIVE"
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
        state.message = action.payload.newMessage
      }
    }
  }
)

export const { log, overwrite } = weekSlice.actions

export default weekSlice.reducer