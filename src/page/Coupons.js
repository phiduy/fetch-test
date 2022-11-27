import styled from "styled-components"

import { TextDisabled, Link } from "../components/Typography"
import Iconify from "../components/Iconify"

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  color: var(--dark-blue);
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

  & > h1 {
    font-size: 48px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 24px;
  }
`

const StyledButton = styled.button`
  width: 100%;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  background-color: var(--dark-blue);
  text-transform: capitalize;
  color: white;
  margin: 16px 0;
`

const StyledSlide = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--border);
  border-radius: 4px;
  margin-bottom: 24px;
  position: relative;
  &::after {
    content: "";
    z-index: 10;
    position: absolute;
    border-radius: 4px;
    top: 0;
    left: 0;
    width: 70%;
    height: inherit;
    background-color: var(--blue);
  }
`

export default function AvailableCoupons() {
  return (
    <Container>
      <TextDisabled style={{ fontWeight: "bold" }}>
        Available Coin balance
      </TextDisabled>
      <h1>340</h1>
      <StyledSlide />
      <TextDisabled style={{ fontSize: 16 }}>
        You have paid rental fee for $1,200.
      </TextDisabled>
      <TextDisabled style={{ fontSize: 16 }}>
        Pay more $800 to achieve Gold Tier.
      </TextDisabled>
      <Link>
        View tier benefits
        <Iconify icon={"eva:arrow-ios-forward-fill"} />
      </Link>
      <StyledButton>My Coupons</StyledButton>
      <TextDisabled style={{ margin: 0, textAlign: "center" }}>
        Updated: 20/11/2021
      </TextDisabled>
    </Container>
  )
}
