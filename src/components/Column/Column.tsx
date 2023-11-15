import type { FC } from 'react'
import { useState } from 'react'

import { Center, Flex , Container, Text} from '@chakra-ui/react'

interface ColumnProps {
  text: string
}

export const Column:FC<ColumnProps> = ({ text }) => {
  const [hours] = useState<string[]>(Array.from({ length: 24}, (_,i: number) => `${i < 10 ? `0${i}:00` : `${i}:00`}`))

  return (
    <Container minH='100vh'>
      <Center alignSelf="center">{text}</Center>
        <Flex justifyContent="space-between" alignItems="flex-start" boxSizing='border-box' borderRight='1px' borderColor='grey' minH="inherit">
          {
            hours.map((hour: string) => <Text pt="2">{hour}</Text>)
          }
        </Flex>
    </Container>
  )
}
