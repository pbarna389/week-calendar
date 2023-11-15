import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Hourly_Unit_Interface {
    time: string
    temperature_2m: string
    weather_code: string 
}

interface HourlyInterface {
  time: string[]
  temperature_2m: number
  weatherCode: number
}

interface ForecastInterface {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation:string
  elevation:number
  hourly_units: Hourly_Unit_Interface
  hourly: HourlyInterface
  daily_units: {
    time: string
    weather_code: string
  },
  daily:{
    time: string[]
    weather_code: number[]
  }
}

interface ArgInter {
  startDate?: string
  endDate?: string
  latitude?: number
  longitude?: number
}

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI', 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1' }),
    endpoints: (builder) => ({
      getWeather: builder.query<ForecastInterface, ArgInter>({
        query: ({startDate, endDate, latitude, longitude}) => `/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&daily=weather_code&timezone=auto&start_date=${startDate}&end_date=${endDate}`,
      }),
    }),
})

export const { useGetWeatherQuery } = weatherAPI