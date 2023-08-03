import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormContainer, Button, Input } from "../../atoms";
import { saveProductValidationSchema } from "./ProductFormValidation";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../redux";
import { useProduct } from "../../../hooks";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedProduct } = useProduct();

  useEffect(() => {
    if (selectedProduct) {
      setImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  const onSave = (data) => {
    // console.log(data)
    // console.log(image)
    dispatch(
      saveProduct({
        product: {
          ...data,
          image,
        },
        productId: selectedProduct?._id,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <FormContainer>
      <Controller
        name="name"
        defaultValue={selectedProduct?.name}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              label="Product name"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          );
        }}
      />

      <Controller
        name="description"
        defaultValue={selectedProduct?.description}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              label="description"
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          );
        }}
      />

      <Controller
        name="category"
        defaultValue={selectedProduct?.category}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              label="category"
              error={!!errors.category}
              helperText={errors.category?.message}
            />
          );
        }}
      />

      <Controller
        name="brand"
        defaultValue={selectedProduct?.brand}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              label="brand"
              error={!!errors.brand}
              helperText={errors.brand?.message}
            />
          );
        }}
      />

      <Controller
        name="price"
        defaultValue={selectedProduct?.price}
        control={control}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              value={value}
              type="number"
              onChange={onChange}
              label="price"
              error={!!errors.price}
              helperText={errors.price?.message}
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
