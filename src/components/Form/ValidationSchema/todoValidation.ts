import * as yup from 'yup';

import { ObjectSchema } from 'yup'

interface TodoSchemaInter {
  name: string
  priority: 'high' | 'medium' | 'low'
}

export const todoSchema:ObjectSchema<TodoSchemaInter> = yup.object().shape({
  name: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Name is required'),
  priority: yup.string().oneOf(['high','medium','low']).required('Priority required')
})