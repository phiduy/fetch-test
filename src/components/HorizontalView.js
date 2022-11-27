import styled from "styled-components"

const StyledTitle = styled.h2`
  margin-bottom: 8px;
  margin-left: 24px;
  font-size: 18px;
`

const StyledDiv = styled.div`
  display: inline-flex;
  max-width: 100%;
  padding: 16px 24px;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
`

export default function HorizontalView({ title, children }) {
  return (
    <section
      style={{
        marginBottom: 16
      }}
    >
      <StyledTitle>{title}</StyledTitle>
      <StyledDiv>{children}</StyledDiv>
    </section>
  )
}
