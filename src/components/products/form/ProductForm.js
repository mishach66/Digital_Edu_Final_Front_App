import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormContainer, Button, Input } from "../../atoms";
import { saveProductValidationSchema } from "./ProductFormValidation";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../redux";
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(saveProductValidationSchema),
    mode: "onChange",
  });

  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSave = (data) => {
    // console.log(data)
    // console.log(image)
    dispatch(
      saveProduct({
        product: {
          ...data,
          image,
        },
      })
    )
      // .unwrap()
      // .then(() => {
      //   navigate("/");
      // });
  };

  return (
    <FormContainer>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Product name"
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          );
        }}
      />

      <Controller
        name="description"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="description"
              error={!!errors.description}
              helperText={errors?.description?.message}
            />
          );
        }}
      />

      <Controller
        name="category"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="category"
              error={!!errors.category}
              helperText={errors?.category?.message}
            />
          );
        }}
      />

      <Controller
        name="brand"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="brand"
              error={!!errors.brand}
              helperText={errors?.brand?.message}
            />
          );
        }}
      />

      <Controller
        name="price"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              type="number"
              onChange={onChange}
              label="price"
              error={!!errors.price}
              helperText={errors?.price?.message}
            />
          );
        }}
      />
      <br />
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />

      <Button onClick={handleSubmit(onSave)}>Save product</Button>
    </FormContainer>
  );
};
