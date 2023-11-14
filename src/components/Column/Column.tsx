import type { FC } from 'react'
import { useState } from 'react'

import { GridItem } from '@chakra-ui/react'

interface ColumnProps {
  text: string
}

export const Column:FC<ColumnProps> = ({ text }) => {
  const [hours] = useState<string[]>(Array.from({ length: 24}, (_,i: number) => `${i < 10 ? `0${i}:00` : `${i}:00`}`))

  return (
    <GridItem display="flex" alignItems="flex-start" boxSizing='border-box' borderRight='1px' borderColor='grey' minH='100vh'>
      <p style={{ alignSelf: 'center'}}>{text}</p>
      {
        hours.map((hour: string) => <p>{hour}</p>)
      }
    </GridItem>
  )
}
