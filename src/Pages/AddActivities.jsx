import React from "react";
import ActivityCardList from "../components/ActivityCardList/ActivityCardList";
import "./AddActivities.css";
import CreatePost from "../components/FormExercisePost/FormExercisePost";
import styled from "@emotion/styled";

export default function AddActivities() {
  const Main = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  `;

  const Left = styled.div`
    grid-column: 1/5;
  `;

  const Right = styled.div`
    grid-column: 5/6;
  `;

  return (
    <div className="AddActivities">
      <Main>
        <Left>
          <ActivityCardList />
        </Left>
      </Main>
    </div>
  );
}
