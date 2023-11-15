import { useState, useEffect } from 'react'

import { Grid, Spinner } from '@chakra-ui/react'
import { Column } from '..'

import { useGetWeatherQuery } from '../../hooks'

  const getDate = (currentYear: number, currentMonth: number, day: number) => {
    return new Date(currentYear, currentMonth, day).toLocaleDateString('hu-hu', { year:"numeric", month:"numeric", day:"numeric"}).split('. ').join('-').replace('.', '')
  }

  const createDates = () => {
    const date = new Date()
    const dateNum = date.getDay() - 1

    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()

    const startDayOfTheWeek = currentDay - dateNum
    const endDayOfTheWeek = startDayOfTheWeek + 6

    const weekStart = getDate(currentYear, currentMonth, startDayOfTheWeek)
    const weekEnd = getDate(currentYear, currentMonth, endDayOfTheWeek)

    console.log(weekStart, weekEnd)

    return { startDate: weekStart, endDate: weekEnd }
  }

export const ColumnWrapper = () => {
  const [columnNum] = useState<number>(7)
  const [arr] = useState<number[]>(Array.from({ length: columnNum }, (_, idx) => idx + 1))
  const [coords, setCoords] = useState<{ latitude: number, longitude: number}>()
  const [dates, setDates] = useState<{ startDate: string, endDate: string}>() 

  const { data, isLoading } = useGetWeatherQuery({ startDate: dates?.startDate, endDate: dates?.endDate, longitude: coords?.latitude, latitude: coords?.longitude })

  useEffect(() => {
    setDates(createDates())
  }, [])

  const getLocation = () => {
    if (!navigator.geolocation) {
      return
    } else {
      navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
              setCoords({ 
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude}
              )
          }
        )
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  if (isLoading || !data) {
    <>
      <Spinner size='xl' />
    </>
  }


  return (
        <Grid templateColumns={`repeat(${columnNum}, 1fr)`} gap="1" width="100%" minH="100vh" boxSizing='border-box'>
          {
            arr.map((day: number, idx: number) => <Column key={`${day}-${idx}`} text={`${day}`} />)
          }
        </Grid>
  )
}
