// Styles
import { DropdownMenuItem } from './styles'

const DropdownItem = (props) => <DropdownMenuItem onClick={props.handleChange}>{props.children}</DropdownMenuItem>

export default DropdownItem
