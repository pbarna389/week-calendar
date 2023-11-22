import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/WeekStore";

interface EditInitalStateInter {
  selectedIdx: number | null
}

const initialState: EditInitalStateInter = {
  selectedIdx: null
}

const editSlice = createSlice(
  {
    name: "editSlice",
    initialState,
    reducers: {
      SELECT_IDX: (state, action) => {
        state.selectedIdx = action.payload
      }
    }
  }
)

export const { SELECT_IDX } = editSlice.actions

export const selectedIdx = (state: RootState) => state.editSlice.selectedIdx

export default editSlice.reducer