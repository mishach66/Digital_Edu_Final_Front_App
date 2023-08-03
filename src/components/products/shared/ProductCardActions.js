import React from "react";
import { isUserAdmin } from "../../../helpers";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct, deleteProduct } from "../../../redux";

export const ProductCardActions = ({ userData, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isUserAdmin(userData)) {
    return (
      <>
        <Button
          onClick={() => {
            navigate(`/products/${product._id}/edit`);
            dispatch(setSelectedProduct(product));
          }}
        >
          edit
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteProduct(product._id));
          }}
        >
          delete
        </Button>
      </>
    );
  }

  return <div>ProductCardActions</div>;
};
