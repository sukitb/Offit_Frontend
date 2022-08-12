import { styled } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
   
    lineHeight: 1.5,
    backgroundColor: 'white',
    borderColor: '#161b22',
    color: '#161b22',
    borderWidth: "5px 3px 3px 5px",
    borderRadius:"95% 1% 97% 1%/4% 94% 1% 95%",
    border: "solid black",
    borderColor: "black",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#a6a8ae',
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