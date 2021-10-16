import styled, { keyframes } from 'styled-components'
import { device } from '../../services/index'
export { Info, Title, InfoHighlight, Button, Page } from '../Shared/styles'

export const Wrapper = styled.div`
  padding-top: 8%;
  width: 80vw;
  @media ${device.greaterThan.tablet} {
    width: 75vw;
  }
  @media ${device.greaterThan.laptop} {
    width: 70vw;
  }
`

const cursorAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
export const Cursor = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    margin: auto;
    position: absolute;
    right: -2px;
    top: 3.5px;
    width: 2px;
    height: 70%;
    background-color: ${(props) => props.theme.colors.neutralLight};
    animation: ${cursorAnimation} 1.2s step-end infinite;
  }
`

export const ButtonContainer = styled.div`
  padding: 1.5rem 0 0 0;
`

export const OutlineContainer = styled.div`
  width: 100%;
  & svg {
    stroke: ${(props) => props.theme.colors.secondaryDark};
  }
`

export const SignatureContainer = styled.div`
  height: 30px;
  float: right;
  & svg {
    fill: ${(props) => props.theme.colors.secondaryPale};
    stroke: ${(props) => props.theme.colors.secondaryPale};
    stroke-width: 4px;
  }
  @media ${device.greaterThan.mobileL} {
    height: 35px;
  }
  @media ${device.greaterThan.laptop} {
    height: 50px;
  }
`
