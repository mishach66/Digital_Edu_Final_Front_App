import React from "react";
import { useSelector } from "react-redux";

export const useProduct = () => {
    const homePageProducts = useSelector(
        (state) => state.product.homePageProducts
    )
  return {
    homePageProducts,
  };
};
