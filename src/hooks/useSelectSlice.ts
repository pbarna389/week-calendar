import { ADD_MONDAY_DATA } from '../features/mondaySlice'
import { ADD_TUESDAY_DATA } from '../features/tuesdaySlice'
import { ADD_WEDNESDAY_DATA } from '../features/wednesdaySlice'
import { ADD_THURSDAY_DATA } from '../features/thursdaySlice'
import { ADD_FRIDAY_DATA } from '../features/fridaySlice'
import { ADD_SATURDAY_DATA } from '../features/saturdaySlice'
import { ADD_SUNDAY_DATA } from '../features/sundaySlice'
import { StoreValueInter } from '../@types/weekCalendar'

export const useSelectSlice = () => {

    const storeValues: StoreValueInter[] = [
    { 
      dispatch: { 
        addDayData: ADD_MONDAY_DATA 
      } 
    },
    { 
      dispatch: { 
        addDayData: ADD_TUESDAY_DATA 
      } 
    },
    { 
      dispatch: { 
        addDayData: ADD_WEDNESDAY_DATA 
      }
    },
    { 
      dispatch: { 
        addDayData: ADD_THURSDAY_DATA 
      } 
    },
    { 
      dispatch: { 
        addDayData: ADD_FRIDAY_DATA 
      } 
    },
    {  
      dispatch: { 
        addDayData: ADD_SATURDAY_DATA 
      }
    },
    { 
      dispatch: { 
        addDayData: ADD_SUNDAY_DATA 
      } 
    },
  ]

  const returnSlice = (idx: number) => {
    return storeValues[idx]
  }

  return returnSlice
}