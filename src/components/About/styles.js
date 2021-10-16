import styled, { css, keyframes } from 'styled-components'
import { device } from '../../services/index'

const expand = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1); 
  }
`

const expandAnimation = css`
  animation: ${(props) =>
    props.signature || props.main
      ? 'none'
      : css`
          ${expand} 500ms ease;
        `};
`
const colorScheme = css`
  color: ${(props) => props.$color || props.theme.colors.secondaryDark};
`
const centerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const blogText = css`
  font-size: 14px;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  color: ${(props) => props.theme.colors.neutralLight};
  @media ${device.greaterThan.laptopLMin} {
    font-size: ${(props) => props.theme.fonts.normal.xs};
  }
`

const scrollPosition = css`
  /* This will position the anchor tag nicely */
  &::before {
    display: block;
    content: '';
    margin-top: -5.5rem;
    height: 5.5rem;
    visibility: hidden;
    pointer-events: none;
  }
`
export const Page = styled.div`
  background: ${(props) => props.theme.colors.primaryLight};
  border-top: 1.5px solid ${(props) => props.theme.colors.neutralDark};
  align-items: center;
  font-family: 'Raleway', sans-serif;
`

export const Random = styled.div`
  display: flex;
  justify-content: center;
`

export const IconContainer = styled.div`
  display: none;
  @media ${device.greaterThan.laptopLMin} {
    width: 40%;
    display: flex;
    align-items: center;
  }
`

export const TopicContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  @media ${device.greaterThan.laptopLMin} {
    width: 70%;
  }
`

export const TopicContent = styled.div`
  ${blogText};
  width: 100%;
  margin-bottom: 2rem;
  & div {
    display: flex;
    flex-direction: column;
    min-height: 200px;
    @media ${device.greaterThan.laptopLMin} {
      min-height: 155px;
    }
  }
  & p {
    padding: 0.3rem 0 0.3rem 0;
    margin: 0;
    ${expandAnimation};
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 60%;
  }
`

export const TopicTitle = styled.h3`
  ${colorScheme};
  ${scrollPosition};

  font-size: ${(props) => props.theme.fonts.large.xs};
  font-weight: ${(props) => props.theme.fonts.weight.thick};

  padding: 0;
  margin: 0 0 1rem 0;

  @media ${device.greaterThan.laptopLMin} {
    font-size: ${(props) => props.theme.fonts.large.lg};
  }
`

export const Line = styled.div`
  ${centerFlex};
  width: 100%;
  margin-bottom: 2rem;
  & svg {
    width: 85%;
    stroke: ${(props) => props.theme.colors.secondaryDark};
    @media ${device.greaterThan.laptopLMin} {
      width: 75%;
    }
  }
`

export const Underline = styled.span`
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: inset 0px -7px ${(props) => props.$color || props.theme.colors.neutralDark};
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: inset 0px -25px ${(props) => props.$color || props.theme.colors.neutralDark};
  }
`

export const Image = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.neutralLight};
  @media ${device.greaterThan.tabletMin} {
    height: 110px;
    width: 110px;
  }
  @media ${device.greaterThan.tablet} {
    height: 140px;
    width: 140px;
  }
`

export const Title = styled.h1`
  ${scrollPosition};
  margin: 2rem 0;
  color: ${(props) => props.theme.colors.secondaryDark};
  font-size: ${(props) => props.theme.fonts.large.md};
  font-weight: ${(props) => props.theme.fonts.weight.thick};
  @media ${device.greaterThan.laptop} {
    font-size: ${(props) => props.theme.fonts.large.xxl};
  }
`

export const Intro = styled.p`
  font-size: ${(props) => props.theme.fonts.normal.lg};
  font-weight: ${(props) => props.theme.fonts.weight.light};
  color: ${(props) => props.theme.colors.neutralLight};
  @media ${device.greaterThan.laptop} {
    font-size: ${(props) => props.theme.fonts.normal.xl};
  }
`

export const Container = styled.div`
  ${centerFlex};
  margin: 0 auto;
  width: 85%;
  & div {
    text-align: center;
    & svg {
      display: ${(props) => (props.signature ? '' : 'none')};
      stroke: ${(props) => (props.signature ? props.theme.colors.secondaryDark : props.theme.colors.secondaryDark)};
      fill: ${(props) => (props.signature ? props.theme.colors.secondaryDark : props.theme.colors.secondaryDark)};
      height: ${(props) => (props.signature ? '50px' : '200px')};
      @media ${device.greaterThan.laptopLMin} {
        height: ${(props) => (props.signature ? '55px' : '200px')};
        display: block;
      }
    }
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 70%;
  }
`

export const Button = styled.button`
  border: 1px solid ${(props) => (props.active ? props.$color : props.theme.colors.secondaryDark)};
  display: inline-block;
  letter-spacing: 0.2px;
  padding: 0.5rem 0;
  width: 70px;
  font-size: 8px;
  font-family: 'Raleway', sans-serif;
  background: ${(props) => (props.active ? props.$color : 'transparent')};
  color: ${(props) => (props.active ? props.theme.colors.primaryDark : props.theme.colors.neutralLight)};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  box-shadow: ${(props) => (props.light ? '0px 8px 15px rgba(0, 0, 0, 0.2)' : '0px 8px 15px rgba(0, 0, 0, 0.8)')};
  transition: all 300ms ease;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin-right: 4px;
  &:hover {
    border: 1px solid ${(props) => props.$hoverColor};
    cursor: pointer;
    background: ${(props) => props.$hoverColor};
    box-shadow: ${(props) => (props.light ? '0px 15px 20px rgba(0, 0, 0, 0.3)' : '0px 15px 20px rgba(0, 0, 0, 0.9)')};
    color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-4px);
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 150px;
    font-size: 11px;
    margin-right: 1rem;
    padding: 0.6rem 0;
    font-weight: ${(props) => props.theme.fonts.weight.light};
  }
`

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  margin: 0 auto;
  padding: 1rem;
  overflow: auto;
  white-space: nowrap;
  @media ${device.greaterThan.laptopLMin} {
    width: 70%;

    padding: 2rem 0;
  }
`
