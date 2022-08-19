import React from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ActivityForm from "./ActivityForm"

function ActivityFormButton() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledButton = styled(Button)({
    borderRadius: "0px",
    margin: "12px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    fontWeight: 600,
    padding: "6px 12px",
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


  const ButtonText = styled.span`
    font-size: 1em;
    font-family: "Comic Neue";
  `;

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        <ButtonText>New Activity</ButtonText>
      </StyledButton>

      <Dialog fullWidth="true" open={open} onClose={handleClose}>
      <ActivityForm />
      </Dialog>
    </div>
  );
}

export default ActivityFormButton;
