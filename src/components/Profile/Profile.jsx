import React from "react";
import styled from "styled-components";
import { Button } from 'antd';
import 'antd/dist/antd.css';

export function Profile(props) {
  const Profile = styled.div`
    width: auto;
    height: 100%;
    padding: 10px;

    @media screen and (max-width: 768px) {
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  const ProfileImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    max-width: 250px;
    max-height: 250px;

    @media screen and (max-width: 768px) {
      max-width: 250px;
      max-height: 250px;
    }
    
  `;

  const ProfileContentContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ProfileImg = styled.img`
    width: 100%;
    border-radius: 50%;
  `;

  const NameCard = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.25;
  `;

  const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 20px 0px;
  `
  const FullName = styled.span`
    font-size: 24px;
    
  `

  const UserName = styled.span`
    font-size: 20px;
    font-weight: 200;
    //todo ตัวเทา
  `

  const Detail = styled.span`
    
  `
  ;

  return (
    <Profile>
      <ProfileImgContainer>
        <ProfileImg src={props.imgSrc} />
      </ProfileImgContainer>

      <ProfileContentContainer>
        <NameCard>
        <FullName>{props.name} {props.lastName}</FullName>
        <UserName>{props.userName}</UserName>
        <br />
        <Button>Edit profile</Button>
        
        </NameCard>
        <StatCard>
          <Detail>{props.day} Streak</Detail>
          <Detail>{props.day} Total Days Exercises</Detail>
          <Detail>{props.bmi} BMI</Detail>
        </StatCard>
      </ProfileContentContainer>
    </Profile>
  );
}

//todo animate day streak
//todo animate lasted day
