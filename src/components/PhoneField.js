import React from 'react'
import { Controller } from 'react-hook-form'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneField = ({
  name,
  inputControl,
  errors,
  placeholder,
  currentLanguage,
}) => (
  <Controller
    name={name}
    control={inputControl}
    render={({ field }) => (
      <ReactPhoneInput
        enableSearch
        inputStyle={{
          width: '100%',
          height: '3.5rem',
          border: errors?.phone ? '1px solid red' : '',
        }}
        {...field}
        inputClass={currentLanguage === 'ar' && 'ar-class'}
        buttonClass={currentLanguage === 'ar' && 'ar-dropdown-class'}
        placeholder={placeholder}
      />
    )}
  />
)

export default PhoneField
