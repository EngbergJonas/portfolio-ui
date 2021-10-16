// Styles
import { Container } from './styles'

const Icon = (props) => (
  <Container logo={props.logo} signature={props.signature}>
    <div>
      <svg>{props.icon}</svg>
    </div>
  </Container>
)

export default Icon
