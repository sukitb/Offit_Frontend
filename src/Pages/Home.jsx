import { Profile } from "../components/Profile/Profile";
import { useEffect, useState } from "react";
import './Home.css'
import StatusList from "../components/StatusList/StatusList"
import styled from "styled-components";
import BackgroundImg5 from "../assets/background5.svg"
import { instance } from "../api";
import { useNavigate } from 'react-router-dom'

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
    const [userInfo, setUserInfo] = useState([])
    const navigate = useNavigate()

    const fetchUserInfo = async () => {
      const { data, status } = await instance.get('me/profile')
      if (status == 401) {
        navigate('/login')
      }
      setUserInfo(data)
      return(data)
    }

    const fetchActivityInfoWithPost = async () => {
      const { data } = await instance.get('me/activities/post')
      setActivityInfo(data)
      return data;
    }

    useEffect(()=> {
      fetchActivityInfoWithPost()
      fetchUserInfo()
    }, [])
    

    return (
    <div className="Home">
      <Background>
      <img src={BackgroundImg5}></img>
      </Background>
      
      <Main>
      <Left>
      <Profile
      userInfo={userInfo}
       />
      </Left>
      <Right>
      <StatusList
      activityInfo={activityInfo}/>
      </Right>
     
      
      </Main>
      
    </div>
  );
}
