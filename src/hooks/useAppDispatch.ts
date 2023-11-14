import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/WeekStore'

export const useAppDispatch: () => AppDispatch = useDispatch