import { FieldHookConfig, useField } from 'formik'

import { Input, FormLabel, Select } from '@chakra-ui/react'

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
          <option defaultValue={"select"} disabled>Select a value</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
        :
        <Input {...field} />
      }
      {
        meta.touched && meta.error || field.name === 'priority' && !field.value && meta.error &&
          <div>{meta.error}</div>
      }
    </>
  )
}

