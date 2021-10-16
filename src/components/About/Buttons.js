// Redux
import store from '../../store'
import { useSelector } from 'react-redux'
import { setTopic } from '../../reducers/topicReducer'
import { setActiveButton } from '../../reducers/activeButtonSlice'

// Styles
import { Button, ButtonContainer } from './styles.js'

// Assets
import { dark, light } from '../Shared/Theme'
import { topicList } from '../../assets/other/topicList'

const Buttons = () => {
  const activeButton = useSelector((state) => state.activeButton)
  const theme = useSelector((state) => state.theme)

  const handleTopicChange = async (index, topic) => {
    await store.dispatch(setTopic(topic))
    await store.dispatch(setActiveButton(index))
  }

  const color = (topic) => (theme === dark ? dark.colors.hack[topic.name.toLowerCase()] : light.colors.hack[topic.name.toLowerCase()])

  return (
    <ButtonContainer>
      {topicList.map((topic, index) => (
        <Button
          $color={color(topic)}
          $hoverColor={color(topic)}
          light={theme === light}
          key={topic.name.toLowerCase()}
          onClick={() => handleTopicChange(index, topic)}
          active={activeButton === index}
        >
          {topic.name.toLowerCase().includes('csharp') ? 'C#' : topic.name.toUpperCase()}
        </Button>
      ))}
    </ButtonContainer>
  )
}

export default Buttons
