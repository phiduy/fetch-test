import styled from "styled-components"

import HorizontalView from "../components/HorizontalView"
import Iconify from "../components/Iconify"

import { TextDisabled } from "../components/Typography"
import AvailableCoupons from "./Coupons"
import SlideItem from "./SlideItem"

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-bottom: 16px;
`

const StyledHeader = styled.header`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  margin-bottom: 32px;
  color: var(--white);
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: var(--dark-blue);
  z-index: -1;
`

const Wrapper = styled.div`
  /* height: 100vh; */
  max-width: 390px;
  margin: 0 auto;
  padding-bottom: 120px;
`

export default function TierPage() {
  return (
    <Wrapper>
      <StyledHeader>
        <Overlay />
        <div style={{ marginBottom: 32, padding: "0 8px" }}>
          <BackButton>
            <Iconify icon={"eva:arrow-ios-back-fill"} />
          </BackButton>
          <h1>Silver Tier</h1>
          <TextDisabled
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: "22px"
            }}
          >
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards
          </TextDisabled>
        </div>
        <AvailableCoupons />
      </StyledHeader>
      <HorizontalView title={"Petrol"}>
        {[...new Array(4)].map((_, index) => (
          <SlideItem key={`petrol_${index}`} />
        ))}
      </HorizontalView>
      <HorizontalView title={"Rental Rebate"}>
        {[...new Array(4)].map((_, index) => (
          <SlideItem key={`rental_${index}`} />
        ))}
      </HorizontalView>
      <HorizontalView title={"Food and Beverage"}>
        {[...new Array(4)].map((_, index) => (
          <SlideItem key={`food$_${index}`} />
        ))}
      </HorizontalView>
    </Wrapper>
  )
}
