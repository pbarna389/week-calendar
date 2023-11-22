import { type FC } from 'react'

import { Button, Center, Container, useDisclosure} from '@chakra-ui/react'
import Icons from '../Icons/Icons'
import { IconContext } from "react-icons"
import { ModalComponent } from '../Modal'

import { useAppSelector } from '../../hooks'
import { RootState } from '../../store/WeekStore'
import { useAppDispatch } from '../../hooks'
import { SELECT_IDX } from '../../features/editSlice'

type daySliceNames = "mondaySlice" | "thursdaySlice" | "wednesdaySlice" | "tuesdaySlice" | "fridaySlice" | "saturdaySlice" | "sundaySlice"

interface ColumnProps {
  text: string
  idx: number
}

const getDayName = (day:string): daySliceNames => {
  const daySplit = day.split('-').map(Number)
  const baseDate = new Date(Date.UTC(daySplit[0], daySplit[1], daySplit[2]))

  return `${baseDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()}Slice` as daySliceNames
}

export const Column:FC<ColumnProps> = ({ text, idx }) => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  const selectedDate: daySliceNames = getDayName(text)

  const { daily } = useAppSelector((state: RootState) => state[selectedDate])

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(SELECT_IDX(idx))

    onOpen()
  }

  return (
    <>
    {
      daily &&
      <>
        <Container>
          <Center>{daily?.currentDate}</Center>
            <Center>
              <IconContext.Provider value={{ size: "5rem"}}>
                <Icons weatherCode={daily.weatherCode} />
              </IconContext.Provider>
              <Button colorScheme='gray' onClick={handleClick}>Add a todo for this day</Button>
            </Center>
        </Container>
        <ModalComponent isOpen={isOpen} onClose={onClose} currentDate={daily.currentDate} />
      </>
    }
    </>
  )
}
