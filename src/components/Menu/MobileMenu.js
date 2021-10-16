import React from 'react'
import { useTranslation } from 'react-i18next'

import { DropdownMenuLink } from './styles.js'
import './dropdown.css'

import DropdownItem from './DropdownItem'
import cv from '../../assets/media/CV.pdf'
import { useWindowDimensions } from '../../hooks/index'

const MobileMenu = () => {
  const { width } = useWindowDimensions()
  const { t } = useTranslation()
  const mobileBreakpoint = 1025

  return (
    <div style={{ display: width > mobileBreakpoint ? 'none' : 'block' }}>
      <DropdownMenuLink smooth to='#about'>
        {t('navigation.about')}
      </DropdownMenuLink>
      <DropdownItem>{t('navigation.projects')}</DropdownItem>
      <DropdownItem href={cv} target='_blank'>
        {t('navigation.resume')}
      </DropdownItem>
      <DropdownItem>{t('navigation.contact')}</DropdownItem>
    </div>
  )
}

export default MobileMenu
