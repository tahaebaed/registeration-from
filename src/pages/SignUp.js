import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import '../styles/signup.css'

import SelectField from '../components/SelectField'
import { signUpSchema } from '../utilities/valuationsSchema'
import InputTextField from '../components/InputTextField'
import RadioField from '../components/RadioField'
import Button from '@mui/material/Button'
import PhoneField from '../components/PhoneField'

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userName: '',
      positions: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      country: '',
      city: '',
      gender: '',
    },
    resolver: yupResolver(signUpSchema),
  })
  const positions = [
    { value: '', label: '- Please select a postilion -', disabled: true },
    { value: 'front-end', label: 'Front End', disabled: false },
    { value: 'back-end', label: 'back End', disabled: false },
    { value: 'full-stack', label: 'Full Stack', disabled: false },
  ]

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer', label: 'Prefer not to say' },
  ]
  return (
    <section className='signup'>
      <div className='signup-img-wrapper'>
        <img
          className='signup-img'
          src='https://dashboard.tiancai.pro/576c388021650d661e0d6671c272ad00.svg'
          alt='registration form'
        />
      </div>

      <div className='sign-up-form-wrapper'>
        <header className='sign-form-header'>
          <h2 className='header-title'>Registration</h2>
          <div>
            <button className='header-btn-en active'>en</button>
            <button className='header-btn-ar '>ar</button>
          </div>
        </header>
        <form
          className='form-data'
          onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
        >
          <div className='form-control'>
            <label htmlFor='userName'>User name</label>

            <InputTextField
              name='userName'
              inputControl={control}
              placeholder='please enter your user name'
              errors={errors?.userName}
              helperText={errors?.userName?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='positions'>Position you are applying for</label>
            <SelectField
              name='positions'
              control={control}
              positions={positions}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <InputTextField
              name='email'
              type='email'
              inputControl={control}
              placeholder='please enter your email'
              errors={errors?.email}
              helperText={errors?.email?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='phone'>Phone Number</label>
            <PhoneField
              name='phone'
              type='tel'
              inputControl={control}
              placeholder='please enter your phone'
              errors={errors?.phone}
              helperText={errors?.phone?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='country'>Country</label>
            <InputTextField
              name='country'
              inputControl={control}
              placeholder='please enter your country'
              errors={errors?.country}
              helperText={errors?.country?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='city'>city</label>
            <InputTextField
              name='city'
              inputControl={control}
              placeholder='please enter your city'
              errors={errors?.city}
              helperText={errors?.city?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <InputTextField
              type='password'
              name='password'
              inputControl={control}
              placeholder='please enter your password'
              errors={errors?.password}
              helperText={errors?.password?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <InputTextField
              name='confirmPassword'
              type='password'
              inputControl={control}
              placeholder='please confirm your password'
              errors={errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
            />
          </div>
          <div className='form-control radio-control'>
            <label htmlFor='confirmPassword'>Gender</label>
            <div className='radio-holder'>
              <RadioField name='gender' control={control} genders={genders} />
            </div>
          </div>
          <Button
            variant='contained'
            fullWidth
            type='submit'
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? 'submitting' : 'submit'}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default SignUp
