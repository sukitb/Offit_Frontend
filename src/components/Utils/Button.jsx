import { styled } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 600,
    padding: '6px 12px',
   fontFamily: 'Comic Neue',
    lineHeight: 1.5,
    backgroundColor: 'white',
    border: "3px solid #3f52a0",
    
    color: "black",
    boxShadow: "10px 10px 0px -2px #3f52a0",
    backgroundColor: "#ffff",
    '&:hover': {
      backgroundColor: '#3f52a0',
      borderColor: 'black',
      boxShadow: 'none',
    },
    
  });

export function NavigateButton(props) {
    return (
        <>
        <StyledButton onClick={props.onClick} >{props.text}</StyledButton>
        </>
    )
}