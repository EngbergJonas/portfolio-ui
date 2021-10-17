import React from 'react'

// Redux
import { useSelector } from 'react-redux'
import store from '../../store'
import { setErrors } from '../../reducers/errorSlice'

// Services
import { dark } from '../Shared/Theme'

import './webkitStyles.scss'

// Styles
import { Wrapper, Page, Title, Form, Paragraph, Container, ButtonContainer, Button, ButtonActive, InputContainer } from './styles'

const FormWrapper = (props) => {
  const { title, topText, bottomText, submit, children, activeButtonText, optionalButtonText, handleOptionalButton } = props
  const theme = useSelector((state) => state.theme)

  const errors = useSelector((state) => state.errors)

  const errorRows = () => {
    if (errors.length > 0) {
      return errors.map((e, i) => (
        <p key={i} style={{ color: 'white' }}>
          {e.message}
        </p>
      ))
    }
  }

  return (
    <Page dark={theme === dark}>
      <Wrapper>
        <Container>
          <div>
            <Title>{title}</Title>
            <Paragraph>{topText}</Paragraph>
            <Form onSubmit={submit}>
              <InputContainer>{children}</InputContainer>
              {errorRows()}
              <ButtonContainer>
                <ButtonActive secondary type='submit'>
                  {activeButtonText}
                </ButtonActive>
                <Button secondary onClick={handleOptionalButton}>
                  {optionalButtonText}
                </Button>
              </ButtonContainer>
            </Form>
            {bottomText && <Paragraph>{bottomText}</Paragraph>}
          </div>
        </Container>
      </Wrapper>
    </Page>
  )
}

export default FormWrapper
