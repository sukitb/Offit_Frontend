import * as React from "react";
import { useForm } from "react-hook-form";
import { NavigateButton } from "../Utils/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import EditProfileForm from "./EditProfileForm";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import styled from "@emotion/styled";


export default function EditProfile() {

  const AccordianContainer = styled.div`
    border: 3px solid #3f52a0;
    box-shadow: 10px 12px 0px -4px #3f52a0;
    font-size: 20px;
    font-weight: 600;
  `;

  return (
    <AccordianContainer>
      <Accordion>
        <AccordionSummary>
            Edit Profile
        </AccordionSummary>
        
        <AccordionDetails>
          <EditProfileForm />
        </AccordionDetails>
      </Accordion>
    </AccordianContainer>
  );
}
