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
import EditProfileForm from "../EditProfileForm/EditProfileForm"

import Avatar from "../../assets/avatar/avatar-1.svg"
import { avatarGroupClasses } from "@mui/material";


export function Profile(props) {
  
  const Profile = styled.div`
    width: auto;
    
    padding: 0px 20px;
    position: sticky;
    top: 20px;

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
    padding: 20px;
    border: 3px solid #3f52a0;
    box-shadow: 10px 12px 0px -2px #3f52a0;
    font-size: 20px;
    background-color: white;
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
  firstName: "User",
  lastName: "User",
  profileImg: "",
  weight: 45,
  height: 160
}

const [user, setUser] = useState(userInfo) 
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
console.log(errors);

const bmiCal = (height, weight) => {
  return Math.round(weight/((height/100)**2))
}


  return (
    <Profile>
      <ProfileImgContainer>
        <ProfileImg src={Avatar} />
      </ProfileImgContainer>

      <ProfileContentContainer>
        <NameCard>
          
          <FullName>
            {user.firstName} {user.lastName}
          </FullName>
          <UserName></UserName>
          <br />
          </NameCard>
          
          
        
          {/* <EditProfile /> */}
          <EditProfileForm />

        <StatCard>
          <Detail>Streak</Detail>
          <Detail>Total Days Exercises</Detail>
          <Detail>BMI {bmiCal(user.height, user.weight)}</Detail>
        </StatCard>
      </ProfileContentContainer>
    </Profile>
  );
}