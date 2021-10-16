import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

const fonts = {
  normal: {
    xs: '1rem',
    s: '18px',
    md: '20px',
    lg: '22px',
    xl: '24px',
  },
  large: {
    xs: '30px',
    s: '40px',
    md: '50px',
    lg: '60px',
    xl: '70px',
    xxl: '80px',
    hl: '100px',
  },
  weight: {
    thin: '100',
    light: '300',
    normal: '400',
    bold: '500',
    thick: '700',
  },
}

export const dark = {
  colors: {
    primaryDark: '#181818', // dark-blue
    primaryLight: '#1d1d1d', // gray
    secondaryDark: '#00FFD7', // cyan
    secondaryLight: '#FC0D56', // red
    secondaryPale: 'rgba(255, 232, 115, 1)', // yellow
    neutralLight: '#FFFFFF', // white
    neutralDark: '#66FCF1', // cyan
    hack: {
      javascript: 'rgba(240, 219, 79, 1)',
      html: 'rgba(227, 76, 38, 1)',
      css: 'rgba(38, 77, 228, 1)',
      node: 'rgba(60, 135, 58, 1)',
      csharp: 'rgba(106, 13, 173, 1)',
    },
  },
  fonts,
}

export const light = {
  colors: {
    primaryDark: '#EAE7DC', // white
    primaryLight: '#D8C3A5', // beige
    secondaryDark: '#E85A4F', // red
    secondaryLight: '#E98074', // light-red
    secondaryPale: '#E98074', // light-red (again)
    neutralLight: '#686764', // dark-gray
    neutralDark: '#E85A4F', // red (again)
    hack: {
      javascript: 'rgba(240, 219, 79, 1)',
      html: 'rgba(227, 76, 38, 1)',
      css: 'rgba(38, 77, 228, 1)',
      node: 'rgba(60, 135, 58, 1)',
      csharp: 'rgba(106, 13, 173, 1)',
    },
  },

  fonts,
}

const Theme = (props) => <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>

const mapStateToProps = (state) => ({
  theme: state.theme,
})

export default connect(mapStateToProps)(Theme)
