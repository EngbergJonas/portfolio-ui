import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 30vh;
  background-color: ${props => props.theme.colors.primaryLight};
  border-top: 2px solid ${props => props.theme.colors.neutralLight};
`
