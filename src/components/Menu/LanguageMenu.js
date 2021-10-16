import React from 'react'

// Redux
import { setLanguage } from '../../reducers/languageSlice'
import store from '../../store'

// Services
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'

// Components
import DropdownItem from './DropdownItem'

// Styles
import './dropdown.css'

const LanguageMenu = (props) => {
  const { activeMenu, calcHeight, handleMenuChange } = props

  const { t } = useTranslation()

  const changeLanguage = async (language) => {
    // change language to redux
    await store.dispatch(setLanguage(language))
    // change language to i18n for project constants
    await i18n.changeLanguage(language)
  }

  return (
    <CSSTransition in={activeMenu === 'languageSelection'} unmountOnExit timeout={200} classNames='menu-secondary' onEnter={calcHeight}>
      <div className='menu'>
        <DropdownItem handleChange={() => changeLanguage('en')}>{t('settings.en')}</DropdownItem>
        <DropdownItem handleChange={() => changeLanguage('fi')}>{t('settings.fi')}</DropdownItem>
        <DropdownItem handleChange={() => changeLanguage('se')}>{t('settings.se')}</DropdownItem>
        <DropdownItem handleChange={() => handleMenuChange('main')}>{t('settings.back')}</DropdownItem>
      </div>
    </CSSTransition>
  )
}

export default LanguageMenu
