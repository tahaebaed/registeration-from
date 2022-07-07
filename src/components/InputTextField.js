import React from 'react'
import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'

const InputTextField = ({
  name,
  type,
  inputControl,
  label,
  placeholder,
  errors,
  helperText,
}) => (
  <Controller
    name={name}
    control={inputControl}
    render={({ field }) => (
      <TextField
        id={name}
        type={type}
        placeholder={placeholder}
        error={!!errors}
        helperText={errors && helperText}
        {...field}
      />
    )}
  />
)

export default InputTextField
