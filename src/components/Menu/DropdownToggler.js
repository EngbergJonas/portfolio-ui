import React, { useRef } from 'react'

import { NavButtonContainer, IconButton } from './styles.js'
import { useCloseOnClickOutside, useWindowDimensions } from '../../hooks/index'
import Burger from '@animated-burgers/burger-rotate'
import '@animated-burgers/burger-rotate/dist/styles.css'
import { ReactComponent as Settings } from '../../assets/media/settings.svg'

const DropdownToggler = (props) => {
  const dropdownRef = useRef(null)
  const [open, setOpen] = useCloseOnClickOutside(dropdownRef, false)
  const { width } = useWindowDimensions()
  const mobileBreakpoint = 1025

  return (
    <NavButtonContainer>
      <div ref={dropdownRef}>
        <IconButton onClick={setOpen}>{width < mobileBreakpoint ? <Burger isOpen={open} /> : <Settings />}</IconButton>
        {open && props.children}
      </div>
    </NavButtonContainer>
  )
}

export default DropdownToggler
