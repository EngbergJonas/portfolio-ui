// Redux
import { useSelector } from 'react-redux'

// Services
import { useTranslation } from 'react-i18next'

// Styles
import { Title, Info, InfoHighlight, Wrapper, Page, Button, ButtonContainer, OutlineContainer, SignatureContainer, Cursor } from './styles'
// Components
import Typewriter from '../Shared/Typewriter'

// Assets
import { ReactComponent as Outline } from '../../assets/media/sketchylines_down.svg'
import { ReactComponent as Signature } from '../../assets/media/signature.svg'
import { dark } from '../Shared/Theme'

const Hero = (props) => {
  const scrollToRef = () => props.scrollPosition.current.scrollIntoView({ behavior: 'smooth' })
  const { t } = useTranslation()

  const user = useSelector((state) => state.user)
  const theme = useSelector((state) => state.theme)

  const technologies = Object.values(t('expertise', { returnObjects: true }))

  const greetVisitor = () => {
    const time = parseInt(new Date().toLocaleTimeString('fi-FI').slice(0, 2), 10)
    return time < 12 ? t('greet.morning') : time < 17 ? t('greet.afternoon') : t('greet.evening')
  }

  return (
    <Page dark={theme === dark}>
      <Wrapper>
        <InfoHighlight yellow small>
          {greetVisitor()}
          {user.username && ` ${user.username}`}, {t('title.iam')}
        </InfoHighlight>
        <Title> {t('title.jonas')}.</Title>
        <Info>
          I'm a <InfoHighlight>fullstack developer</InfoHighlight> and an aspiring designer from Helsinki.
        </Info>
        <Info>
          I build websites using{' '}
          <Cursor>
            <InfoHighlight typewriter>
              <Typewriter words={technologies} />
            </InfoHighlight>
          </Cursor>
          <span>.</span>
        </Info>

        <ButtonContainer>
          <Button onClick={() => scrollToRef()}>{t('button.about')}</Button>
        </ButtonContainer>

        <SignatureContainer>
          <Signature />
        </SignatureContainer>

        <OutlineContainer>
          <Outline />
        </OutlineContainer>
      </Wrapper>
    </Page>
  )
}

export default Hero
