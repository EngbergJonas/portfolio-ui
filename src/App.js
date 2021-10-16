import React, { useEffect } from 'react'

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Services
import { utils } from './services/index'

// Redux
import store from './store'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'

// Components
import Theme from './components/Shared/Theme'
import Menu from './components/Menu/Menu'
import Login from './components/Login/Login'
import Loader from './components/Loader/Loader'
import Register from './components/Login/Register'
import Home from './components/Home/Home'

// Styles
import './index.css'

const App = () => {
  const isLoading = useSelector((state) => state.isLoading)

  // setting the user to redux is currently bound to the loading function
  // the username will display when getting redirected on a successful login
  useEffect(() => {
    utils.setUserToRedux()
  }, [isLoading])

  return (
    <Provider store={store}>
      <Theme>
        <Router>
          <Menu />
          <Loader />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </Router>
      </Theme>
    </Provider>
  )
}

export default App
