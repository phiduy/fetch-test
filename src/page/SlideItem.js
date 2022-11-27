import styled from "styled-components"

import { Link, TextDisabled } from "../components/Typography"

const Wrapper = styled.div`
  min-width: 200px;
  height: 220px;
  border: 1px solid #f1f1f5;
  border-radius: 4px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  &:not(:last-child) {
    margin-right: 24px;
  }
`

const Content = styled.div`
  padding: 16px;
`

const Image = styled.div`
  max-width: 100%;
  height: 80px;
  object-fit: cover;
  background-color: bisque;
`

export default function SlideItem() {
  return (
    <Wrapper>
      <Image />
      <Content>
        <Link style={{ fontWeight: "bold" }}>20 coins</Link>
        <TextDisabled>Get $20 Rental Rebate</TextDisabled>
      </Content>
    </Wrapper>
  )
}
