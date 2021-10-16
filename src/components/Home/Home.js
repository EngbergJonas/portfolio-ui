import React, { createRef } from 'react'

import Hero from '../Hero/Hero'
import About from '../About/About'

const Home = () => {
  const ref = createRef()
  return (
    <>
      <Hero scrollPosition={ref} />
      <About ref={ref} />
    </>
  )
}

export default Home
