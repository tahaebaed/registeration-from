import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import '../styles/signup.css'

import SelectField from '../components/SelectField'
import { signUpSchema } from '../utilities/valuationsSchema'
import InputTextField from '../components/InputTextField'
import RadioField from '../components/RadioField'
import Button from '@mui/material/Button'
import PhoneField from '../components/PhoneField'
import { registrationLocalizations } from '../utilities/localizations'

const SignUp = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    registrationLocalizations.getLanguage()
  )
  useEffect(() => {}, [currentLanguage])

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
  const gendersAr = [
    { value: 'ذكر', label: 'ذكر' },
    { value: 'انثى', label: 'انثى' },
    { value: 'اخرى', label: 'اخرى' },
    { value: 'يفضل', label: 'يفضل عدم القول' },
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
            <button
              className={`header-btn-en ${
                currentLanguage === 'en' && 'active'
              }`}
              onClick={() => {
                registrationLocalizations.setLanguage('en')
                setCurrentLanguage('en')
              }}
            >
              en
            </button>
            <button
              className={`header-btn-ar ${
                currentLanguage === 'ar' && 'active'
              }`}
              onClick={() => {
                registrationLocalizations.setLanguage('ar')
                setCurrentLanguage('ar')
              }}
            >
              ar
            </button>
          </div>
        </header>
        <form
          className='form-data'
          onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
          dir={registrationLocalizations.getLanguage() === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className='form-control'>
            <label htmlFor='userName'>
              {registrationLocalizations.userName}
            </label>

            <InputTextField
              name='userName'
              inputControl={control}
              placeholder={registrationLocalizations.userNameHolder}
              errors={errors?.userName}
              helperText={errors?.userName?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='positions'>
              {registrationLocalizations.position}
            </label>
            <SelectField
              name='positions'
              control={control}
              positions={positions}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'> {registrationLocalizations.email}</label>
            <InputTextField
              name='email'
              type='email'
              inputControl={control}
              placeholder={registrationLocalizations.emailHolder}
              errors={errors?.email}
              helperText={errors?.email?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='phone'> {registrationLocalizations.phone}</label>
            <PhoneField
              name='phone'
              type='tel'
              inputControl={control}
              placeholder={registrationLocalizations.phoneHolder}
              errors={errors?.phone}
              helperText={errors?.phone?.message}
              dir={
                registrationLocalizations.getLanguage() === 'ar' ? 'rtl' : 'ltr'
              }
            />
          </div>
          <div className='form-control'>
            <label htmlFor='country'>{registrationLocalizations.country}</label>
            <InputTextField
              name='country'
              inputControl={control}
              placeholder={registrationLocalizations.countryHolder}
              errors={errors?.country}
              helperText={errors?.country?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='city'>{registrationLocalizations.city}</label>
            <InputTextField
              name='city'
              inputControl={control}
              placeholder={registrationLocalizations.cityHolder}
              errors={errors?.city}
              helperText={errors?.city?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>
              {registrationLocalizations.password}
            </label>
            <InputTextField
              type='password'
              name='password'
              inputControl={control}
              placeholder={registrationLocalizations.passwordHolder}
              errors={errors?.password}
              helperText={errors?.password?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='confirmPassword'>
              {registrationLocalizations.confirmPassword}
            </label>
            <InputTextField
              name='confirmPassword'
              type='password'
              inputControl={control}
              placeholder={registrationLocalizations.confirmPasswordHolder}
              errors={errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
            />
          </div>
          <div className='form-control radio-control'>
            <label htmlFor='confirmPassword'>
              {registrationLocalizations.gender}
            </label>
            <div className='radio-holder'>
              <RadioField
                name='gender'
                control={control}
                genders={currentLanguage === 'en' ? genders : gendersAr}
              />
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
