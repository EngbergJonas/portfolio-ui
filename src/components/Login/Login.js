import React, { useState } from 'react'

// Redux
import store from '../../store'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { setIsLoading } from '../../reducers/loadSlice'
import { setErrors } from '../../reducers/errorSlice'

// Services
import { loginService, userService, utils } from '../../services/index'
import { useTranslation } from 'react-i18next'

// Styles
import { Input, Highlight } from './styles'
import FormWrapper from './FormWrapper'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const { t } = useTranslation()
  const history = useHistory()

  const user = useSelector((state) => state.user)

  const handleUsername = ({ target }) => setUsername(target.value)
  const handlePassword = ({ target }) => setPassword(target.value)

  const handleLogin = async (event) => {
    event.preventDefault()
    setSubscribed(true)
    try {
      await store.dispatch(setIsLoading(true))

      let user = await loginService.login({
        username,
        password,
      })

      if (user) {
        userService.setToken(user.token)
        utils.setTokenToLocalStorage(user)
      }

      store.dispatch(setErrors([]))
      setUsername('')
      setPassword('')
    } catch (e) {
      console.log('Unable to login')
    }
    setSubscribed(false)
    store.dispatch(setIsLoading(false))
  }

  const handleNavRegister = (event) => {
    event.preventDefault()
    return history.push('/register')
  }

  const topText = [
    'You can use this form to login to my portfolio site for ',
    <Highlight yellow key={1}>
      exclusive features
    </Highlight>,
    '.',
  ]

  const bottomText = ["Don't have an account? Feel free to register using the ", <Highlight key={2}>register button</Highlight>, '.']

  return (
    <>
      {!subscribed && user.username ? (
        <Redirect to='/' />
      ) : (
        <FormWrapper
          title={'Login'}
          topText={topText}
          submit={handleLogin}
          bottomText={bottomText}
          activeButtonText={t('button.login')}
          optionalButtonText={t('button.register')}
          handleOptionalButton={handleNavRegister}
        >
          <Input placeholder={'Username'} type='text' value={username} onChange={handleUsername} />
          <Input placeholder={'Password'} type='password' value={password} onChange={handlePassword} />
        </FormWrapper>
      )}
    </>
  )
}

export default Login
