import React from 'react'
import { Redirect, useHistory } from 'react-router'
import { Link } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Services
import { dark } from '../Shared/Theme'

// Styles
import { Wrapper, Page, Title, Container, ButtonActive } from './styles'

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
            <div style={{ padding: '1.5rem 0' }}>
              <ButtonActive secondary onClick={() => history.push('/')}>
                Go Home
              </ButtonActive>
            </div>
          </div>
        </Container>
      </Wrapper>
    </Page>
  )
}

export default NotFound
