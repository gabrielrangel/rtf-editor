import styled from "styled-components";

export const NavGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: stretch;
  
  ::after {
    content: '';
    border-left: solid 1px rgb(235, 235, 237);
  }
  
  * {
    align-self: stretch;
  }
`
