import type { FC } from 'react'

import { Button, FormControl } from "@chakra-ui/react"
import { Formik, FormikProps } from "formik"
import { Form as FormikForm } from 'formik'
import { InputField } from "./Input/Input"
import { todoSchema } from './ValidationSchema/todoValidation'

import { useAppDispatch } from '../../hooks'
import { useAppSelector } from '../../hooks'
import { selectedIdx } from '../../features/editSlice'

import { useSelectSlice } from '../../hooks'
interface FormProps {
  onClose: () => void
}

export const Form:FC<FormProps> = ({ onClose }) => {
  const idx = useAppSelector(selectedIdx)
  
  const dispatch = useAppDispatch()

  const returnSlice = useSelectSlice()


  return (
    <Formik initialValues={{ name: '', priority: '' }} validationSchema={todoSchema} onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (idx !== null) {
            console.log(idx)
            const selectedSlice = returnSlice(idx)

            const { addTodo } = selectedSlice.dispatch

            alert(JSON.stringify(values, null, 2));
            
            dispatch(addTodo({addTodo: values}))
  
            setSubmitting(false);
          }

          onClose()
        }, 1000);
      }}> 
      {(props: FormikProps<any>) => (
      <FormikForm>
        <FormControl display="flex" alignItems="center" justifyContent="center">
          <InputField name="name" type="text" label="Todo name" />
          <InputField name="priority" type="select" label="Priority selection" isSelect />
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
          </Button>
        </FormControl>
      </FormikForm>
  )}
  </Formik>
  )
}