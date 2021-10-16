// Styles
import { TopicContent, TopicContainer, TopicTitle } from './styles'

const Topic = (props) => {
  return (
    <TopicContainer>
      <TopicContent>
        <TopicTitle main>Technologies</TopicTitle>
        <div dangerouslySetInnerHTML={{ __html: props.children }} />
      </TopicContent>
    </TopicContainer>
  )
}

export default Topic
