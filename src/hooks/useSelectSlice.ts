import { ADD_MONDAY_DATA, ADD_MONDAY_TODO } from '../features/mondaySlice'
import { ADD_TUESDAY_DATA, ADD_TUESDAY_TODO } from '../features/tuesdaySlice'
import { ADD_WEDNESDAY_DATA, ADD_WEDNESDAY_TODO } from '../features/wednesdaySlice'
import { ADD_THURSDAY_DATA, ADD_THURSDAY_TODO } from '../features/thursdaySlice'
import { ADD_FRIDAY_DATA, ADD_FRIDAY_TODO } from '../features/fridaySlice'
import { ADD_SATURDAY_DATA, ADD_SATURDAY_TODO } from '../features/saturdaySlice'
import { ADD_SUNDAY_DATA, ADD_SUNDAY_TODO } from '../features/sundaySlice'
import { StoreValueInter } from '../@types/weekCalendar'

export const useSelectSlice = () => {

    const storeValues: StoreValueInter[] = [
    { 
      dispatch: { 
        addDayData: ADD_MONDAY_DATA,
        addTodo: ADD_MONDAY_TODO
      } 
    },
    { 
      dispatch: { 
        addDayData: ADD_TUESDAY_DATA,
        addTodo: ADD_TUESDAY_TODO
      } 
    },
    { 
      dispatch: { 
        addDayData: ADD_WEDNESDAY_DATA,
        addTodo: ADD_WEDNESDAY_TODO
      }
    },
    { 
      dispatch: { 
        addDayData: ADD_THURSDAY_DATA, 
        addTodo: ADD_THURSDAY_TODO
      } 
    },
    { 
      dispatch: { 
        addDayData: ADD_FRIDAY_DATA,
        addTodo: ADD_FRIDAY_TODO
      } 
    },
    {  
      dispatch: { 
        addDayData: ADD_SATURDAY_DATA,
        addTodo: ADD_SATURDAY_TODO
      }
    },
    { 
      dispatch: { 
        addDayData: ADD_SUNDAY_DATA,
        addTodo: ADD_SUNDAY_TODO
      } 
    },
  ]

  const returnSlice = (idx: number) => {
    return storeValues[idx]
  }

  return returnSlice
}