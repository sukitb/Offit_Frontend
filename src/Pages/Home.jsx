import { Profile } from "../components/Profile/Profile";
import { useState } from "react";
import './Home.css'
import ProfileImgMock from "../assets/ProfileMockingSqaure.jpg"
import Calendar from "react-calendar";
import Datebar from "../components/Datebar/Datebar";
import Navbar from "../components/Navbar/Navbar";
import StatusList from "../components/StatusList/StatusList"
import styled from "styled-components";

import ActivityCardList from "../components/ActivityCardList/ActivityCardList";

export function Home() {
    
    const [day, setSay] = useState(1)
    const [lastDay, setLastDay] = useState(1)
    const [profileName, setProfileName] = useState("Nam")
    const [profileLastName, setProfileLastName] = useState("Prachatai")
    const [bmi, setBmi] = useState(23.5)
    const [userName, setUserName] = useState("nam_zaa")

    const Main = styled.div`
      margin-top: 100px;
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
  
    return (
    <div className="Home">
      <Navbar />
      {/* <Datebar /> */}
      <Main>
      <Left>
      <Profile />
      </Left>
      <Right>
      <StatusList
      />
      </Right>
     
     
      </Main>
      
    </div>
  );
}
