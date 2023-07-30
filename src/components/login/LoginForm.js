import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "./LoginFormValidation";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux";
import { FormContainer, Button, Input } from "../atoms";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks";
import { Alert } from "../atoms";

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showAlert, alertState, handleClose } = useAlert();

  const onSubmit = (data) => {
    console.log("DATA", data);
    dispatch(authenticateUser({ formValues: data, isLogin: true }))
      .unwrap()
      .then(() => {
        navigate("/");
        showAlert('წარმატებული ოპერაცია', 'success')
      })
      .catch((error) => {
        console.log('error-ი', error)
        showAlert(error, 'error');
      });
  };

  return (
    <FormContainer>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          );
        }}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              type="password"
              label="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <Alert handleClose={handleClose} {...alertState} />
      <Button onClick={handleSubmit(onSubmit)}>login</Button>
    </FormContainer>
  );
};
