import { Profile } from "../components/Profile/Profile";
import { useState } from "react";
import './Home.css'
import ProfileImgMock from "../assets/ProfileMockingSqaure.jpg"
import StatusList from "../components/StatusList/StatusList"
import styled from "styled-components";

import ActivityCardList from "../components/ActivityCardList/ActivityCardList";

import BackgroundImg from "../assets/background.svg"
import BackgroundImg2 from "../assets/background2.svg"

export function Home() {

    const Main = styled.div`
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4,1fr);
      
      @media screen and (max-width: 768px) {
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    `

    const Left = styled.div`
      grid-column: 1/2;
    `

    const Right = styled.div`
      grid-column: 2/5;
    `

const Background = styled.div`
    position: absolute;
    z-index: -1;
    max-width: 500px;
    bottom: 50px;

    img {
      max-width: 100%;
    }
`
  
    return (
    <div className="Home">
      
      
      <Main>
      <Left>
      <Profile />
      </Left>
      <Right>
      <StatusList
      />
      </Right>
     
      <Background>
      <img src={BackgroundImg2}></img>
      </Background>
      </Main>
      
    </div>
  );
}
