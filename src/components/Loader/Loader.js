// Redux
import { useSelector } from 'react-redux'

// Services
import ReactLoading from 'react-loading'

// Styles
import { Container } from './styles'

const Loader = () => (
  <>
    {useSelector((state) => state.isLoading) && (
      <Container>
        <ReactLoading type={'spin'} color={'#FC0D56'} height={0} width={80} />
      </Container>
    )}
  </>
)

export default Loader
