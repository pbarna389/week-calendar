import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ForecastInterface {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation:string
  elevation:number
  daily_units: {
    time: string
    weather_code: string
  },
  daily:{
    time: string[]
    weather_code: number[]
    temperature_2m_min: number[]
    temperature_2m_max: number[]
  }
}

interface QueryProps {
  startDate?: string
  endDate?: string
  latitude?: number
  longitude?: number
}

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI', 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1' }),
    endpoints: (builder) => ({
      getWeather: builder.query<ForecastInterface, QueryProps>({
        query: ({startDate, endDate, latitude, longitude}) => `/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${startDate}&end_date=${endDate}`,
      }),
    }),
})

export const { useGetWeatherQuery } = weatherAPI