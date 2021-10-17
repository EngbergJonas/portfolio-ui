import styled from 'styled-components'
import backgroundImg from '../../assets/media/background.svg'
import backgroundImgLight from '../../assets/media/background_light.svg'
import { device } from '../../services/index'

export const Page = styled.div`
  background-image: ${(p) => (p.dark ? `url(${backgroundImg})` : `url(${backgroundImgLight})`)};
  color: ${(p) => p.theme.colors.primaryDark};
  font-family: 'Raleway', sans-serif;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: ${(p) => p.theme.fonts.large.xs};
  font-weight: ${(p) => p.theme.fonts.weight.thick};
  font-family: 'Permanent Marker', cursive;
  color: ${(p) => (p.yellow ? p.theme.colors.secondaryPale : p.theme.colors.secondaryDark)};
  padding: 0.4rem 0 1rem 0;
  margin: 0;
  @media ${device.greaterThan.tablet} {
    font-size: ${(p) => p.theme.fonts.large.s};
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${(p) => p.theme.fonts.large.md};
  }
  @media ${device.greaterThan.desktop} {
    font-size: ${(p) => p.theme.fonts.large.xl};
  }
`

export const Info = styled.div`
  font-size: ${(p) => (p.small ? p.theme.fonts.normal.s : p.theme.fonts.normal.md)};
  color: ${(p) => p.theme.colors.neutralLight};
  font-weight: ${(p) => p.theme.fonts.weight.normal};
  padding: 0 0 4px 0;
  display: block;
  @media ${device.greaterThan.desktop} {
    font-size: ${(p) => p.theme.fonts.large.lg};
  }
`

export const InfoHighlight = styled.span`
  ${Info};
  font-size: ${(p) => (p.small ? p.theme.fonts.normal.s : p.theme.fonts.normal.md)};
  color: ${(p) => (p.yellow ? p.theme.colors.secondaryPale : p.theme.colors.secondaryLight)};
`

export const Paragraph = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.neutralLight};
  font-size: ${(p) => p.theme.fonts.normal.normal};
`

export const Highlight = styled.span`
  font-size: ${(p) => p.theme.fonts.normal.normal};
  color: ${(p) => (p.yellow ? p.theme.colors.secondaryPale : p.theme.colors.secondaryLight)};
`

export const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  border: 1px solid ${(p) => (p.secondary ? p.theme.colors.neutralDark : p.theme.colors.neutralLight)};
  border-radius: 4px;
  background: transparent;
  padding: 0.5rem 0.6rem;
  margin: 0 1rem 0 0;
  font-weight: ${(p) => p.theme.fonts.weight.normal};
  color: ${(p) => (p.secondary ? p.theme.colors.neutralDark : p.theme.colors.neutralLight)};
  &:hover {
    transition: 0.2s ease-in;
    border-color: ${(p) => p.theme.colors.neutralLight};
    cursor: pointer;
    color: ${(p) => p.theme.colors.primaryDark};
    background: ${(p) => p.theme.colors.neutralDark};
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  @media ${device.greaterThan.mobileL} {
    font-size: ${(p) => p.theme.fonts.normal.normal};
  }
  @media ${device.greaterThan.tablet} {
    padding: 0.7rem 1.4rem;
  }
`

export const ButtonActive = styled(Button)`
  background: ${(p) => p.theme.colors.neutralDark};
  color: ${(p) => p.theme.colors.primaryDark};
  border: 1px solid ${(p) => p.theme.colors.neutralDark};
  &:hover {
    border-color: ${(p) => p.theme.colors.neutralDark};
    color: ${(p) => p.theme.colors.neutralDark};
    background: transparent;
  }
`
