import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const categories = useSelector((state) => state.product.categories);

  const isLoading = useSelector((state) => state.product.loading);

  return {
    homePageProducts,
    selectedProduct,
    isLoading,
    categories,
  };
};
