import type { FC } from 'react'

import { Button, FormControl } from "@chakra-ui/react"
import { Formik, FormikProps } from "formik"
import { Form as FormikForm } from 'formik'
import { InputField } from "./Input/Input"

interface FormProps {
  onClose: () => void
}

export const Form:FC<FormProps> = ({ onClose }) => {
  return (
    <Formik initialValues={{ name: "" }} onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}> 
      {(props: FormikProps<any>) => (
      <FormikForm>
        <FormControl display="flex" alignItems="center" justifyContent="center">
          <InputField name="name" type="text" label="Todo name" />
          <InputField name="priority" type="select" label="Priority selection" isSelect />
          <Button
            onClick={onClose}
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