//광고 배너 기능에 해당 단 img는 그때 그때 달라질 수 있음 
import React from "react";
import styled from "styled-components";
import SwiperBanner from "./swiperbanner";

const Banner = () => {
    return(
        <StyledWrap>
            <Blank/>
            <BannerStyle>
            <SwiperBanner/>
            </BannerStyle>
        </StyledWrap>
    )
}
export default Banner;

const StyledWrap = styled.div`
    box-sizing: border-box;
    max-width: 50rem;
    min-width: 18.75rem;
    width: 80%;
    height: 100%;
    margin: 0 auto;
`
const BannerStyle = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 10rem;
    max-height: 10rem;
    color: #efefef;
`
const Blank = styled.div`
    min-height: 3rem;
`