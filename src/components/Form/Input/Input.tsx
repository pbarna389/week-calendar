import { FieldHookConfig, useField } from 'formik'

import { Input, FormLabel, FormErrorMessage, Select } from '@chakra-ui/react'

interface OtherProps {
  label : string
  isSelect?: boolean
}

export const InputField = (props: OtherProps & FieldHookConfig<any>) => {
  const [field, meta] = useField(props)

  return (
    <>
      <FormLabel>{props.label}</FormLabel>
      {
        props.isSelect ? 
        <Select {...field}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="hight">High</option>
        </Select>
        :
        <Input {...field} />
      }
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </>
  )
}

