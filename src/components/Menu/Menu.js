import React from 'react'
import { useTranslation } from 'react-i18next'

import { Navbar, Nav, NavContainer, Brand, NavHyperlink, NavLink, NavContainerDesktop } from './styles.js'
import DropdownMenu from './DropdownMenu'

import { ReactComponent as Logo } from '../../assets/media/logo.svg'
import cv from '../../assets/media/CV.pdf'

const NavBrand = (props) => (
  <NavContainer onClick={props.handleChange}>
    <Brand to='/'>{props.icon}</Brand>
  </NavContainer>
)

const Menu = () => {
  const { t } = useTranslation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Navbar>
      <Nav>
        <NavBrand handleChange={() => scrollToTop()} icon={<Logo />} />
        <NavContainerDesktop>
          <NavLink smooth to='#about'>
            {t('navigation.about')}
          </NavLink>
        </NavContainerDesktop>

        <NavContainerDesktop>
          <NavHyperlink>{t('navigation.projects')}</NavHyperlink>
        </NavContainerDesktop>

        <NavContainerDesktop>
          <NavHyperlink href={cv} target='_blank'>
            {t('navigation.resume')}
          </NavHyperlink>
        </NavContainerDesktop>

        <NavContainerDesktop>
          <NavHyperlink>{t('navigation.contact')}</NavHyperlink>
        </NavContainerDesktop>
        <DropdownMenu />
      </Nav>
    </Navbar>
  )
}

export default Menu
