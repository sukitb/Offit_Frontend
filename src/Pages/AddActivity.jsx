import React, {useState, useEffect} from "react";
import ActivityCardList from "../components/ActivityCardList/ActivityCardList";
import "./AddActivities.css";
import CreatePost from "../components/FormExercisePost/FormExercisePost";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "@mui/material/Button";

import EditActivityCardForm from "../components/ActivityCardForm/EditActivityForm";
import BackgroundImg3 from "../assets/background3.svg";
import ActivityForm from "../components/ActivityCardForm/ActivityForm";
import ActivityFormButton from "../components/ActivityCardForm/ActivityFormButton";
import axios from "axios";
import { instance } from "../api";


export default function AddActivities() {
  const Main = styled.div``;

  const Top = styled.div`
    display: flex;
    padding: 10px;
  `;

  const Background = styled.div`
    position: absolute;
    z-index: -1;
    max-width: 500px;
    bottom: 50px;

    img {
      max-width: 100%;
    }
  `;

  const [activityInfo, setActivityInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const fetchActivities = async () => {
    const { data } = await instance.get("me/activities");
    console.log(data);
    setActivityInfo(data)
    return data;
  };

  const fetchUserInfo = async () => {
    const data = await instance.get('me/profile')
    setUserInfo(data)
    console.log(data)
    return(data)
  }

  useEffect(() => {
    fetchActivities()
    fetchUserInfo()
  }, [])

  return (
    <div className="AddActivities">
      <Top>
        <ActivityFormButton
        fetchActivities={fetchActivities} />
      </Top>
      <Main>
        {/* <EditActivityCardForm /> */}
        <ActivityCardList
        activityInfo={activityInfo}
        fetchActivities={fetchActivities}
        userInfo={userInfo}
        />
      </Main>
      <Background>
        <img src={BackgroundImg3}></img>
      </Background>
    </div>
  );
}
