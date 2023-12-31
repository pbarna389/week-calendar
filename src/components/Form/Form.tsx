import type { FC } from 'react'

import { Button, FormControl } from "@chakra-ui/react"
import { Formik, FormikProps } from "formik"
import { Form as FormikForm } from 'formik'
import { InputField } from "./Input/Input"
import { todoSchema } from './ValidationSchema/todoValidation'

interface FormProps {
  onClose: () => void
}

export const Form:FC<FormProps> = ({ onClose }) => {
  return (
    <Formik initialValues={{ name: '', priority: '' }} validationSchema={todoSchema} onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
  
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