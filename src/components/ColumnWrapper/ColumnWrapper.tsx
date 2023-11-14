import { useState } from 'react'

import { Grid } from '@chakra-ui/react'
import { Column } from '..'

export const ColumnWrapper = () => {
  const [columnNum] = useState<number>(7)
  const [arr] = useState<number[]>(Array.from({ length: columnNum }, (_, idx) => idx + 1))

  return (
    <Grid templateColumns={`repeat(${columnNum}, 1fr)`} gap="1" width="100%" minH="100vh" boxSizing='border-box'>
      {
        arr.map((day: number, idx: number) => <Column key={`${day}-${idx}`} text={`${day}`} />)
      }
    </Grid>
  )
}
