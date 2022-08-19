import React, { useState } from "react";
import "./FormExercisePost.css";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

function CreatePost(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const ButtonContainer = styled.div`
    display: flex;
  `

const StyledButton = styled(Button)({
  margin: "12px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  fontWeight: 600,
  padding: "6px 12px",
  fontFamily: "Comic Neue",
  lineHeight: 1.5,
  backgroundColor: "white",
  border: "3px solid #3f52a0",
  color: "black",
  boxShadow: "10px 10px 0px -2px #3f52a0",
  backgroundColor: "#ffff",
  "&:hover": {
    backgroundColor: "#3f52a0",
    borderColor: "black",
    boxShadow: "none",
  },
});

  const Post = styled.button`
  color: black;
  border: 3px solid #3f52a0;
  height: 2em;
  font-size: 20px;
  background-color: white;
  border-radius: 15px;
  width: 70px;
  border: 3px solid #3f52a0;
    box-shadow: 6px 8px 0px -2px #3f52a0;
  /* box-shadow: 10px 10px 0px -2px #3f52a0; */
  :hover {
    background-color: #3f52a0;
    border-color: #3f52a0;
    box-shadow: none;
  }
`;

  return (
    <div className="form-post">
      <div className="post-form-middle">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register("Post", { required: true, maxLength: 80 })} cols="20" rows="5" placeholder="What's on your mind ?" />
          <ButtonContainer>
            
            
            <StyledButton type="submit" className="post-button">Post</StyledButton>
            </ButtonContainer>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
