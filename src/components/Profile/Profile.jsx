import React, { useState } from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { NavigateButton } from "../Utils/Button";

//mock
import profileMockImg from "../../assets/ProfileMockingSqaure.jpg"

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import EditProfile from "../EditProfileForm/EditProfile";

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
  `;
  const FullName = styled.span`
    font-size: 32px;
    font-weight: 700;
  `;

  const UserName = styled.span`
    font-size: 20px;
    font-weight: 200;
    //todo ตัวเทา
  `;

  const Detail = styled.span``;
  const EditButton = styled(Button)`
    background-color: black;
  `;

const userInfo = {
  firstName:  "Nam",
  lastName: "Pratai",
  profileImg: "",
  bmi: 23.5,
}

const [firstName, setFirstName] = useState(userInfo.firstName)
const [lastName, setLastName] = useState(userInfo.lastName)
const [profileImg, setProfileImg] = useState(userInfo.profileImg)
const [bmi, setBmi] = useState(userInfo.bmi)
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
console.log(errors);


  return (
    <Profile>
      <ProfileImgContainer>
        <ProfileImg src={profileMockImg} />
      </ProfileImgContainer>

      <ProfileContentContainer>
        <NameCard>
          
          <FullName>
            {firstName} {lastName}
          </FullName>
          <UserName></UserName>
          <br />
          </NameCard>
          
          
        
          <EditProfile />
       

        <StatCard>
          <Detail>Streak</Detail>
          <Detail>Total Days Exercises</Detail>
          <Detail>BMI</Detail>
        </StatCard>
      </ProfileContentContainer>
    </Profile>
  );
}

//todo animate day streak
//todo animate lasted day
