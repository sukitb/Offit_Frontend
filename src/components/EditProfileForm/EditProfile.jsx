import React from "react";
import { useForm } from "react-hook-form";
import { NavigateButton } from "../Utils/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import EditProfileForm from "./EditProfileForm"

export default function EditProfile() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <NavigateButton onClick={handleClickOpen} text="Edit profile" />
      

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit profile</DialogTitle>
        
        
          <DialogContentText>
            Update your profile then click save
          </DialogContentText>
          
        
        <EditProfileForm />
        
      </Dialog>
    </>
  );
}
