import React from 'react'
import { Controller } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
const SelectField = ({ type, name, control, positions }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} displayEmpty>
          {positions.map((position, index) => (
            <MenuItem
              key={index}
              value={position.value}
              disabled={position.disabled}
            >
              {position.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  )
}

export default SelectField
