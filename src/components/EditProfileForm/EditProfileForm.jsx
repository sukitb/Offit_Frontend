import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { NavigateButton } from "../Utils/Button";
import Portal from "@mui/material/Portal";
import Box from "@mui/material/Box";
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => { 
    console.log(data);
    setShow(!show);
    alert(`Saved`);
  }
  // console.log(errors);

  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const showAlert = () => {
    setShow(!show);
    alert(`Saved`);
  };

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

    .form {
      border-left: 50px solid #3f52a0;
      font-size: 20px;
      padding-left: 10px;
      background-color: #ffff;
      height: 2em;
      width: 80%;
      margin-bottom: 20px;
    }

    label {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
    }
  `;

  const Save = styled.button`
    color: white;
    border: 3px solid #60ba71;
    height: 2em;
    font-size: 20px;
    background-color: #60ba71;
    border-radius: 15px;
    width: 70px;
    /* box-shadow: 10px 10px 0px -2px #38c653; */
    :hover {
      background-color: #38c653;
      border-color: #38c653;
      box-shadow: none;
    }
  `;

  return (
    <div>
      <NavigateButton text="Edit profile" onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </NavigateButton>
      {show ? (
        <Portal container={container.current}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <label>name</label>
              <input
                id="name"
                type="text"
                className="form"
                
                {...register("name", { required: true, maxLength: 50 })}
              />
              {/* <label for='last_name'>Surename</label>
  <input id='last_name' type="text" placeholder="Surename" {...register("Surename", {required: true, maxLength: 50})} /> */}
              <label for="height">Height</label>
              <input
                id="height"
                type="number"
                className="form"
                min="0"
                {...register("height", { max: 500, min: 10 })}
              />
              <label for="weight">Weight</label>
              <input
                id="weight"
                type="number"
                className="form"
                min="0"
                {...register("weight", { max: 500, min: 10 })}
              />
              <Save type="submit">Save</Save>
            </FormContainer>
          </form>
        </Portal>
      ) : null}
      <Box sx={{ p: 1, my: 1 }} ref={container} />
    </div>
  );
}
