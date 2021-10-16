import { useState, useEffect, useRef } from 'react'
import useTypewriter from 'react-typewriter-hook'

let index = 0

const Typewriter = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [color, setColor] = useState('white')
  const word = useTypewriter(currentWord)
  const interval = 4500

  const js = 'rgb(240, 219, 79)'
  const html = 'rgb(227, 76, 38)'
  const dotnet = 'rgb(106, 13, 173)'
  const react = 'rgb(97, 219, 251)'
  const angular = 'rgb(204, 53, 52)'
  const java = 'rgb(248, 152, 32)'
  const node = 'rgb(104, 160, 99)'

  useEffect(() => {
    let isSubscribed = true
    setTimeout(() => {
      if (isSubscribed) {
        index = index > 6 ? 0 : ++index
        setCurrentWord(words[index])
      }
    }, interval)
    return () => (isSubscribed = false)
  }, [currentWord, words])

  useEffect(() => {
    let isSubscribed = true
    if (word && isSubscribed) {
      setColor(
        word.startsWith('J') && index < 2
          ? js
          : word.startsWith('H')
          ? html
          : word.startsWith('.')
          ? dotnet
          : word.startsWith('R')
          ? react
          : word.startsWith('A')
          ? angular
          : word.startsWith('N')
          ? node
          : java
      )
    }
    return () => (isSubscribed = false)
  }, [word])

  return (
    <div>
      <span style={{ color: color }}>{word}</span>
    </div>
  )
}
export default Typewriter
