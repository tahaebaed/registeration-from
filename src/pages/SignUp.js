import React, { useContext } from 'react'
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
import { FormattedMessage, useIntl } from 'react-intl'
import { LocaleContext } from '../lang/LocalizationProvider'

const SignUp = () => {
  const { locale, setLocale } = useContext(LocaleContext)

  const intl = useIntl()
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
          <h2 className='header-title'>
            <FormattedMessage id='header' defaultMessage='Registration' />
          </h2>
          <div>
            <button
              className={`header-btn-en ${locale === 'en' && 'active'}`}
              onClick={() => {
                setLocale('en')
                localStorage.setItem('lang', 'en')
              }}
            >
              en
            </button>
            <button
              className={`header-btn-ar ${locale === 'ar' && 'active'}`}
              onClick={() => {
                setLocale('ar')
                localStorage.setItem('lang', 'ar')
              }}
            >
              ar
            </button>
          </div>
        </header>
        <form
          className='form-data'
          onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className='form-control'>
            <label htmlFor='userName'>
              <FormattedMessage
                id='userName'
                defaultMessage='User name
'
              />
            </label>

            <InputTextField
              name='userName'
              inputControl={control}
              placeholder={intl.messages.userNameHolder}
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
            <label htmlFor='email'>
              <FormattedMessage
                id='email'
                defaultMessage='Please enter your email'
              />
            </label>
            <InputTextField
              name='email'
              type='email'
              inputControl={control}
              placeholder={intl.messages.emailHolder}
              errors={errors?.email}
              helperText={errors?.email?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='phone'>
              {' '}
              <FormattedMessage
                id='phone'
                defaultMessage='Please add Your phone number'
              />{' '}
            </label>
            <PhoneField
              name='phone'
              type='tel'
              inputControl={control}
              placeholder={intl.messages.phoneHolder}
              errors={errors?.phone}
              helperText={errors?.phone?.message}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              currentLanguage={locale}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='country'>
              <FormattedMessage
                id='country'
                defaultMessage='Please add your country'
              />
            </label>
            <InputTextField
              name='country'
              inputControl={control}
              placeholder={intl.messages.countryHolder}
              errors={errors?.country}
              helperText={errors?.country?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='city'>
              <FormattedMessage
                id='city'
                defaultMessage='Please add your city'
              />
            </label>
            <InputTextField
              name='city'
              inputControl={control}
              placeholder={intl.messages.cityHolder}
              errors={errors?.city}
              helperText={errors?.city?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>
              <FormattedMessage
                id='password'
                defaultMessage='Please add your password'
              />
            </label>
            <InputTextField
              type='password'
              name='password'
              inputControl={control}
              placeholder={intl.messages.passwordHolder}
              errors={errors?.password}
              helperText={errors?.password?.message}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='confirmPassword'>
              <FormattedMessage
                id='confirmPassword'
                defaultMessage='please confirm your password'
              />
            </label>
            <InputTextField
              name='confirmPassword'
              type='password'
              inputControl={control}
              placeholder={intl.messages.confirmPasswordHolder}
              errors={errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
            />
          </div>
          <div className='form-control radio-control'>
            <label htmlFor='confirmPassword'>
              <FormattedMessage id='gender' />
            </label>
            <div className='radio-holder'>
              <RadioField
                name='gender'
                control={control}
                genders={locale === 'en' ? genders : gendersAr}
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
