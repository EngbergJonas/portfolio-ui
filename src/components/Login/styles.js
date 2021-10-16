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
  &::-webkit-autofill {
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 1em 0 1em 0;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: ${(props) => props.theme.fonts.normal.xs};
  font-family: 'Raleway', sans-serif;
  color: ${(props) => props.theme.colors.secondaryLight};
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLight};
  margin-bottom: 10px;
  background: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryLight};
  }
  &:focus,
  input:focus {
    outline: none;
  }
  input:-webkit-autofill {
    width: 100%;
    height: 40px;
    font-size: ${(props) => props.theme.fonts.normal.xs};
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.theme.colors.secondaryLight};
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralLight};
    margin-bottom: 10px;
    background: none;
  }

  input:-webkit-autofill:focus {
    outline: none;
  }
`

export const ButtonContainer = styled.div`
  padding: 0.2em 0 0 0;
`
