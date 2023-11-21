import type { FC } from 'react'

import { Button, Center, Container} from '@chakra-ui/react'
import Icons from '../Icons/Icons'
import { IconContext } from "react-icons"
interface ColumnProps {
  text: string
  weather_code: number
}

import { useDisclosure } from '@chakra-ui/react'
import { ModalComponent } from '../Modal'

export const Column:FC<ColumnProps> = ({ text, weather_code }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <Container>
        <Center>{text}</Center>
          <Center>
            <IconContext.Provider value={{ size: "5rem"}}>
              <Icons weatherCode={weather_code} />
            </IconContext.Provider>
            <Button colorScheme='gray' onClick={onOpen}>Add a todo for this day</Button>
          </Center>
      </Container>
      <ModalComponent isOpen={isOpen} onClose={onClose} text={text} />
    </>
  )
}
