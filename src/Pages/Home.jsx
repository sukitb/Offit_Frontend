import { Profile } from "../components/Profile/Profile";
import { useEffect, useState } from "react";
import './Home.css'
import ProfileImgMock from "../assets/ProfileMockingSqaure.jpg"
import StatusList from "../components/StatusList/StatusList"
import styled from "styled-components";

import ActivityCardList from "../components/ActivityCardList/ActivityCardList";

import BackgroundImg from "../assets/background.svg"
import BackgroundImg2 from "../assets/background2.svg"
import BackgroundImg4 from "../assets/background4.svg"
import BackgroundImg5 from "../assets/background5.svg"
import axios from "axios";
import { instance } from "../api";

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
    
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px #3f52a045;
    background-color: #ffff;
    height: 250px;
    width: 100%;

    img {
      height: 100%;
      width: 50%;
      object-position: 100% 0%;
      object-fit: cover;
    }
`
    const [activityInfo, setActivityInfo] = useState([])
    const [postInfo, setPostInfo] = useState([])

    const fetchActivityInfoWithPost = async () => {
      const { data } = await instance.get('me/activities/post')
      setActivityInfo(data)
      console.log(data)
      return data;
    }

    

    useEffect(()=> {
      fetchActivityInfoWithPost()
    }, [])
    

    return (
    <div className="Home">
      <Background>
      <img src={BackgroundImg5}></img>
      </Background>
      
      <Main>
      <Left>
      <Profile />
      </Left>
      <Right>
      <StatusList
      activityInfo={activityInfo}/>
      </Right>
     
      
      </Main>
      
    </div>
  );
}
