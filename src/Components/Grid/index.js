import styled from 'styled-components'

export default styled.div`
  min-height: 100vh;
  
  background-color: rgb(243,245,247);
  
  display: grid;
  gap: 20px;

  grid-template:
  "nav" 50px
  "paper" 1fr
  "footer" 50px
  / 100vw;
`