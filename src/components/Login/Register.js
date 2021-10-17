import React, { useState } from 'react'

// Redux
import store from '../../store'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { setIsLoading } from '../../reducers/loadSlice'

// Services
import { loginService, userService, utils } from '../../services/index'
import { dark } from '../Shared/Theme'
import { useTranslation } from 'react-i18next'

// Styles
import { Input, Highlight } from './styles'

import FormWrapper from './FormWrapper'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const { t } = useTranslation()
  const history = useHistory()

  const user = useSelector((state) => state.user)

  const handleNavLogin = (event) => {
    event.preventDefault()
    return history.push('/login')
  }

  const handleUsername = ({ target }) => setUsername(target.value)
  const handlePassword = ({ target }) => setPassword(target.value)
  const handleFirstname = ({ target }) => setFirstname(target.value)
  const handleLastname = ({ target }) => setLastname(target.value)
  const handleEmail = ({ target }) => setEmail(target.value)
  const handlePhone = ({ target }) => setPhone(target.value)

  const handleRegister = async (event) => {
    event.preventDefault()
    setSubscribed(true)
    try {
      await store.dispatch(setIsLoading(true))

      // let user = await loginService.login({
      //   username,
      //   password,
      // })

      // // set token to user service to fetch the user
      // userService.setToken(user.token)

      // // set needed info the localstorage
      // utils.setTokenToLocalStorage(user)

      // setUsername('')
      // setPassword('')
    } catch (error) {
      console.log('Register error: ' + error)
    }
    setSubscribed(false)
    store.dispatch(setIsLoading(false))
  }

  const topText = [
    'Please fill in your information ',
    <Highlight key={1} yellow>
      below
    </Highlight>,
    '.',
  ]

  return (
    <>
      {!subscribed && user.username ? (
        <Redirect to='/login' />
      ) : (
        <FormWrapper
          title={'Register'}
          topText={topText}
          submit={handleRegister}
          activeButtonText={t('button.register')}
          optionalButtonText={t('button.login')}
          handleOptionalButton={handleNavLogin}
        >
          <Input placeholder={'Username'} type='text' value={username} onChange={handleUsername} />
          <Input placeholder={'Password'} type='password' value={password} onChange={handlePassword} />
          <Input placeholder={'Firstname'} type='text' value={firstname} onChange={handleFirstname} />
          <Input placeholder={'Lastname'} type='text' value={lastname} onChange={handleLastname} />
          <Input placeholder={'Email'} type='text' value={email} onChange={handleEmail} />
          <Input placeholder={'Phone'} type='text' value={phone} onChange={handlePhone} />
        </FormWrapper>
      )}
    </>
  )
}

export default Register
