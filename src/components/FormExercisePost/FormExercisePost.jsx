import React, { useState } from "react";
import "./FormExercisePost.css";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

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

  const Post = styled.button`
  color: black;
  border: 3px solid #4abc9c;
  height: 2em;
  font-size: 20px;
  background-color: white;
  border-radius: 15px;
  width: 70px;
  border: 3px solid #4abc9c;
    box-shadow: 6px 8px 0px -2px #4abc9c;
  /* box-shadow: 10px 10px 0px -2px #38c653; */
  :hover {
    background-color: #59e2bb;
    border-color: #59e2bb;
    box-shadow: none;
  }
`;

  return (
    <div className="form-post">
      <div className="post-form-middle">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register("Post", { required: true, maxLength: 80 })} cols="20" rows="5" placeholder="What's on your mind ?" />
          <ButtonContainer>
            
            
            <Post type="submit" className="post-button">Post</Post>
            </ButtonContainer>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
