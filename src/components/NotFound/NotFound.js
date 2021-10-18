import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Services
import { dark } from '../Shared/Theme'
import { useHistory } from 'react-router'

// Styles
import { Wrapper, Page, Title, Container, ButtonActive, ButtonContainer } from './styles'

const NotFound = () => {
  const theme = useSelector((state) => state.theme)
  const history = useHistory()

  return (
    <Page dark={theme === dark}>
      <Wrapper>
        <Container>
          <div>
            <Title yellow>404 - page not found</Title>
            <Title>:(</Title>
            <ButtonContainer>
              <ButtonActive secondary onClick={() => history.push('/')}>
                Frontpage
              </ButtonActive>
            </ButtonContainer>
          </div>
        </Container>
      </Wrapper>
    </Page>
  )
}

export default NotFound
