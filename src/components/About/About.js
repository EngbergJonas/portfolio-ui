import { forwardRef, useRef } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Styles
import { Page, Intro, Title, Image, ImageContainer } from './styles.js'

// Assets
import { dark } from '../Shared/Theme'
import { Signature, Icon, Topic, Buttons, Experiences, jonasLight, jonasDark } from './index'

// Services
import { useTranslation } from 'react-i18next'

// Components
import Section from './Section'

const About = forwardRef((_props, ref) => {
  const { t } = useTranslation()
  const topicRef = useRef(null)

  const theme = useSelector((state) => state.theme)
  const topic = useSelector((state) => state.topic).name.toLowerCase()

  return (
    <Page>
      {/* Title */}
      <Section>
        <Title ref={ref} id='about'>
          {t('title.about')}
        </Title>
      </Section>

      {/* Profile Picture */}
      <Section>
        <ImageContainer>
          <Image src={theme === dark ? jonasDark : jonasLight} />
        </ImageContainer>
      </Section>

      {/* Intro */}
      <Section>
        <Intro>{t('paragraphs.about')}</Intro>
      </Section>

      {/* Skills & Experiences */}
      <Experiences topicRef={topicRef} />

      {/* Topics */}
      <div ref={topicRef}>
        <Topic>{t(`paragraphs.${topic}`)}</Topic>
      </div>

      {/* Signature */}
      <Icon signature icon={<Signature />} />

      {/* Topic Buttons */}
      <Buttons />
    </Page>
  )
})

export default About
