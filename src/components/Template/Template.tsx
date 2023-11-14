import { useState } from 'react'

import { overwrite } from "../../features/daySlice"
import { useAppDispatch, useAppSelector } from "../../hooks"

export const Template = () => {
  const [value, setValue] = useState<string>('')

  const message = useAppSelector((state) => state.testSlice.message)
  const dispatch = useAppDispatch()

  const handleDispatch = () => {
    dispatch(overwrite({newMessage: value}))
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column"}}>{message}</div>
      <label>Change message!</label>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="button" onClick={handleDispatch}>Change text</button>
    </>
  )
}
