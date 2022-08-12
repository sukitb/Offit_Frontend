import React from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function EditProfileForm(props) {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  

    return (
      <div>
      <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      NoValidate
      autoComplete="off"
    >
      
      <Controller
        name="firstName"
        control={control}
        rules={{ required: true, maxLength: 30}}
        render={({ field }) => <TextField {...field} label="fullWidth" />}
      />
      <Controller
        name="lastName"
        control={control}
        rules={{ required: true, maxLength: 30}}
        render={({ field }) => <TextField {...field}  />}
      />
      </Box>

      <input type="submit" />
      </div>
    
    )
}