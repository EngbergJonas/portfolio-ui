import styled from 'styled-components'
export { Title, Button, Page, Info, Highlight, Paragraph, ButtonActive } from '../Shared/styles'

export const Wrapper = styled.div`
  height: 100%;
  padding-top: 5%;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputContainer = styled.div`
  max-width: 500px;
`

export const Form = styled.form`
  width: 100%;
  padding: 1em 0 1em 0;
`

export const Input = styled.input`
  width: 100% !important;
  height: 40px !important;
  font-size: ${(props) => props.theme.fonts.normal.xs} !important;
  font-family: 'Raleway', sans-serif !important;
  color: ${(props) => props.theme.colors.secondaryLight} !important;
  border: 0 !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLight} !important;
  margin-bottom: 10px !important;
  background: none !important;
  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryLight} !important;
  }
  &:focus,
  input:focus {
    outline: none !important;
  }
`

export const ButtonContainer = styled.div`
  padding: 0.2em 0 0 0;
`
