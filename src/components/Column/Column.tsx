import type { FC } from 'react'

import { Button, Center, Container} from '@chakra-ui/react'
import Icons from '../Icons/Icons'
import { IconContext } from "react-icons"
interface ColumnProps {
  text: string
  weather_code: number
}

export const Column:FC<ColumnProps> = ({ text, weather_code }) => {
  return (
    <Container minH='100vh'>
      <Center>{text}</Center>
        <Center>
          <IconContext.Provider value={{ size: "5rem"}}>
            <Icons weatherCode={weather_code} />
          </IconContext.Provider>
          <Button colorScheme='gray'>Add a todo for this day</Button>
        </Center>
    </Container>
  )
}
