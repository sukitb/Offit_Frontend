import React from "react";
import ActivityCardList from "../components/ActivityCardList/ActivityCardList";
import "./AddActivities.css";
import CreatePost from "../components/FormExercisePost/FormExercisePost";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "@mui/material/Button";
import ActivityCardFormMyway from "../components/ActivityCardForm/ActivityCardFormMyWay";
import EditActivityCardForm from "../components/ActivityCardForm/EditActivityCardForm";

export default function AddActivities() {
  const Main = styled.div`
    
  `;

  const Top = styled.div`
    display: flex;
    padding: 10px;
  `

  return (
    <div className="AddActivities">
      <Top>
      <ActivityCardFormMyway />

      </Top>
      <Main>
        {/* <EditActivityCardForm /> */}
          <ActivityCardList />
        
      </Main>
    </div>
  );
}
