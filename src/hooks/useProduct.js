import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const categories = useSelector((state) => state.product.categories);

  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );

  const totalPages = useSelector((state) => state.product.totalPages);

  const isLoading = useSelector((state) => state.product.loading);

  return {
    homePageProducts,
    selectedProduct,
    isLoading,
    categories,
    categoryProducts,
    totalPages,
  };
};
