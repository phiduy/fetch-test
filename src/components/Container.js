import styled from "styled-components"

const StyledDiv = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  background-color: white;
  height: inherit;
`

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}
