import React, { useState } from 'react'

// Redux
import store from '../../store'
import { useSelector } from 'react-redux'
import { setTheme } from '../../reducers/themeSlice'
import { setIsLoading } from '../../reducers/loadSlice.js'

// Services
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import { utils } from '../../services/index'

// Assets
import { light, dark } from '../Shared/Theme'

// Styles
import { DropdownContainer, DropdownMenuItem, DropdownMenuLink } from './styles.js'
import './dropdown.css'

// Components
import DropdownItem from './DropdownItem'
import DropdownToggler from './DropdownToggler'
import LanguageMenu from './LanguageMenu'
import MobileMenu from './MobileMenu'

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const { t } = useTranslation()

  const theme = useSelector((state) => state.theme)
  const user = useSelector((state) => state.user)

  const calcHeight = (el) => {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  const handleSetTheme = async () => {
    if (theme === dark) {
      document.documentElement.style.setProperty('--webkit-form-text', '#E98074')
    } else {
      document.documentElement.style.setProperty('--webkit-form-text', '#fc0d56')
    }

    await store.dispatch(setTheme(theme === dark ? light : dark))
  }

  const handleMenuChange = (menu) => menu && setActiveMenu(menu)

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedUser')
    try {
      await store.dispatch(setIsLoading(true))

      await utils.removeUserFromRedux()
    } catch (error) {
      console.log('error removing user: ' + error)
    }
    await store.dispatch(setIsLoading(false))
  }

  return (
    <DropdownToggler>
      <DropdownContainer style={{ height: menuHeight }}>
        {/* Transition for main container */}
        <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={200} classNames='menu-primary' onEnter={calcHeight}>
          <div className='menu'>
            <DropdownItem handleChange={() => handleMenuChange('languageSelection')}>{t('settings.languages')}</DropdownItem>
            <DropdownItem handleChange={() => handleSetTheme()}>{theme === dark ? t('settings.light') : t('settings.dark')}</DropdownItem>
            {user.username ? (
              <DropdownMenuItem onClick={() => handleLogout()}>Logout</DropdownMenuItem>
            ) : (
              <DropdownMenuLink to='/login'>Login</DropdownMenuLink>
            )}
            {/* Mobile Nav Links when query breaks */}
            <MobileMenu />
          </div>
        </CSSTransition>
        {/* Language Selection */}
        <LanguageMenu activeMenu={activeMenu} calcHeight={calcHeight} handleMenuChange={handleMenuChange} />
      </DropdownContainer>
    </DropdownToggler>
  )
}

export default DropdownMenu
