import { useState, useEffect } from 'react'

import { Grid, Spinner } from '@chakra-ui/react'
import { Column } from '..'

import { useAppDispatch, useGetWeatherQuery } from '../../hooks'
import { skipToken } from '@reduxjs/toolkit/query'

import { useSelectSlice } from '../../hooks'

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

  return { startDate: weekStart, endDate: weekEnd }
}

interface InfoDataInter {
  startDate?: string
  endDate?: string
  latitude?: number
  longitude?: number
}

export const ColumnWrapper = () => {
  const [columnNum] = useState<number>(7)

  const [infoData, setInfoData] = useState<InfoDataInter>()
  
  const { data, isLoading } = useGetWeatherQuery({ startDate: infoData?.startDate, endDate: infoData?.endDate, longitude: infoData?.latitude, latitude: infoData?.longitude } ?? skipToken)

  const returnSlice = useSelectSlice()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      data.daily.time.forEach((day: string, idx: number) => {
        const newData = {
          currentDate: day,
          weatherCode: data.daily.weather_code[idx]
        }

        const selectedSlice = returnSlice(idx)

        dispatch(selectedSlice.dispatch.addDayData({ newDaily: newData }))
      })
    }
  }, [data])

  useEffect(() => {
    if (!navigator.geolocation) {
      return
    } else {

      let result = {...createDates()}

      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
              const coordData = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
              result = {...result, ...coordData}
              setInfoData(result)
        }
      )
    }
  }, [])

  if (isLoading || !data) {
    return (
      <>
        <Spinner size='xl' />
      </>
    )
  }

  return (
      <>
        <Grid templateColumns={`repeat(${columnNum}, 1fr)`} gap="1" width="100%" boxSizing='border-box'>
          {
            data?.daily.time.map((day: string, idx: number) => <Column key={`${day}-${idx}`} text={`${day}`} />)
          }
        </Grid>
      </>
  )
}
