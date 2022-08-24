import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react"
import { instance } from '../api'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [profileInfo, setProfileInfo] = useState([])

  const onSubmit = async (data) => {
    await instance.post("/login", data);
  }

  return (
    <div>
      <h1>Login ที่นี่นะจ้ะ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
