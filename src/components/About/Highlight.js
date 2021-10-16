import { Underline } from './styles'
import { useSelector } from 'react-redux'

const Highlight = (props) => {
  const theme = useSelector((state) => state.theme)
  const color = props.value

  return (
    <Underline $color={theme.colors.hack[color]} onClick={props.handleChange}>
      {props.children}
    </Underline>
  )
}

export default Highlight
