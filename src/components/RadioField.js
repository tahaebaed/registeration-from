import React from 'react'
import { Controller } from 'react-hook-form'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

const RadioField = ({ name, control, genders }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <RadioGroup sx={{ flexDirection: 'row' }} aria-label={name} {...field}>
        {genders.map((gender, index) => (
          <FormControlLabel
            sx={{ marginRight: 2 }}
            key={index}
            value={gender.value}
            control={<Radio />}
            label={gender.label}
          />
        ))}
      </RadioGroup>
    )}
  />
)

export default RadioField
