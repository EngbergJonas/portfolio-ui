// Redux
import store from '../../store'
import { setTopic } from '../../reducers/topicReducer'
import { setActiveButton } from '../../reducers/activeButtonSlice'

// Styles
import { TopicContainer, Line, TopicTitle, TopicContent, IconContainer } from './styles'

// Assets
import { SketchylineDown, Icon, LightBulb } from './index'
import { topicList } from '../../assets/other/topicList'

// Services
import { useTranslation } from 'react-i18next'

//Components
import Highlight from './Highlight'

const Experiences = (props) => {
  const scrollToTopic = () => window.scrollTo({ top: props.topicRef.current.offsetTop, left: 0, behavior: 'smooth' })
  const { t } = useTranslation()

  const handleScrollToTopic = async (topic) => {
    scrollToTopic()
    const index = topicList.map((t) => t.name.toLowerCase()).indexOf(topic.toLowerCase())
    await store.dispatch(setTopic(topicList[index]))
    await store.dispatch(setActiveButton(index))
  }

  //
  return (
    <div>
      <TopicContainer>
        <TopicContent main>
          <TopicTitle main>{t('title.experiences')}</TopicTitle>
          <p>
            {t('exparagraph.1')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
              C#
            </Highlight>
            .
          </p>
          <p>
            {t('exparagraph.2')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('javascript')} value={'javascript'}>
              JavaScript
            </Highlight>
            ,
            <Highlight handleChange={() => handleScrollToTopic('html')} value={'html'}>
              HTML
            </Highlight>
            ,{' '}
            <Highlight handleChange={() => handleScrollToTopic('css')} value={'css'}>
              CSS
            </Highlight>{' '}
            {t('exparagraph.3')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
              ASP.NET MVC
            </Highlight>
            .
          </p>
          <p>
            {t('exparagraph.4')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
              .NET Core
            </Highlight>
            ,{' '}
            <Highlight handleChange={() => handleScrollToTopic('node')} value={'node'}>
              Node
            </Highlight>{' '}
            {t('exparagraph.5')} SQL
          </p>
        </TopicContent>
        <IconContainer>
          <Icon icon={<LightBulb />} />
        </IconContainer>
      </TopicContainer>

      <Line>
        <SketchylineDown />
      </Line>
    </div>
  )
}

export default Experiences
