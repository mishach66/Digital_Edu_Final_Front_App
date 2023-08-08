// user slice
export { userReducer, authenticateUser, logout } from "./userSlice";

// product slice
export {
  productReducer,
  setSelectedProduct,
  saveProduct,
  fetchHomePageProducts,
  deleteProduct,
  fetchCategoryProducts,
} from "./productslice";

// cart slice
export {
  cartReducer,
  clearCart,
  addToCart,
  removeFromCart,

  // Async actions
  fetchCart,
  saveCart,
} from "./cartSlice";
