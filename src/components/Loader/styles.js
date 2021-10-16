import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  backdrop-filter: blur(3px);
  z-index: 10;
  overflow: hidden;
  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
