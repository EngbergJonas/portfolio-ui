import styled, { keyframes, css } from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { device } from '../../services/index'

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(8px); 
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-55%); 
  }
`

const shrink = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.9);
    transform-origin: 50% 50%;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`
const centerFlexNoDecor = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

const navTextStyle = css`
  font-weight: ${(props) => props.theme.fonts.weight.light};
  font-size: ${(props) => props.theme.fonts.normal.md};
  color: ${(props) => props.theme.colors.neutralLight};
`

const desktopLinkStyles = css`
  ${navTextStyle};
  ${centerFlexNoDecor};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondaryDark};
  }
`

const mobileLinkStyles = css`
  ${navTextStyle};
  ${centerFlexNoDecor};
  height: 50px;
  border-radius: 8px;
  padding: 0.5rem;
  justify-content: flex-start;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondaryDark};
    animation: ${moveRight} 300ms ease;
    transform: translateX(8px);
  }
`

//Desktop Hyperlink
export const NavHyperlink = styled.a`
  ${desktopLinkStyles};
`
//Desktop Link
export const NavLink = styled(Link)`
  ${desktopLinkStyles};
`

//Mobile HyperLink
export const DropdownMenuItem = styled.a`
  ${mobileLinkStyles};
`
//Mobile Link
export const DropdownMenuLink = styled(Link)`
  ${mobileLinkStyles};
`

//Navigation Bar
export const Navbar = styled.nav`
  height: 60px;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 0 1rem;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.secondaryDark};
  z-index: 999;
  font-family: 'Raleway', sans-serif;
`

//List inside navigation bar
export const Nav = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`

//Items that disappear on mobile
export const NavContainerDesktop = styled.li`
  display: none;
  padding-left: 16px;
  @media ${device.greaterThan.laptop} {
    width: 10%;
    ${centerFlexNoDecor};
  }
`

//Items that disappear on dektop
export const NavContainer = styled.li`
  width: 50%;
  ${centerFlexNoDecor};
  /* Logo goes to middle in mobile */
  justify-content: flex-end;
  @media ${device.greaterThan.laptop} {
    width: 10%;
    justify-content: center;
  }
`

//Container for settings button
export const NavButtonContainer = styled.li`
  width: 40%;
  ${centerFlexNoDecor};
  /* Button goes to the right end of navbar */
  justify-content: flex-end;
  @media ${device.greaterThan.laptop} {
    width: 39%;
  }
`

//Settings Button
export const IconButton = styled.a`
  width: calc(60px * 0.5);
  height: calc(60px * 0.5);
  background-color: transparent;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  ${centerFlexNoDecor};
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
  & svg {
    width: calc(60px);
    height: calc(60px);
    &:hover {
      transform: scale(0.9);
    }
  }

  @media ${device.greaterThan.laptop} {
    background-color: ${(props) => props.theme.colors.neutralLight};
    &:hover {
      background-color: ${(props) => props.theme.colors.secondaryLight};
      animation-name: ${spin};
      animation-duration: 600ms;
      transform: rotate(180deg);
    }
  }
`

//Logo
export const Brand = styled(Link)`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  ${centerFlexNoDecor};
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
  & svg {
    fill: ${(props) => props.theme.colors.neutralLight};
    width: calc(60px);
    height: calc(60px);
    &:hover {
      transform: scale(0.9);
      fill: ${(props) => props.theme.colors.secondaryLight};
      animation: ${shrink} 300ms ease;
    }
  }
  @media ${device.greaterThan.laptop} {
    background-color: transparent;
    &:hover {
      background-color: transparent;
      animation: none !important;
      transform: rotate(0deg);
    }
  }
`

//Dropdown Container
export const DropdownContainer = styled.div`
  position: absolute;
  top: 70px;
  width: 200px;
  animation: ${slideIn} 300ms ease;
  transform: translateX(-55%);
  background-color: ${(props) => props.theme.colors.primaryDark};
  border: 1px ${(props) => props.theme.colors.primaryDark};
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 200ms ease;
`
