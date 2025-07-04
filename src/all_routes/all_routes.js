const express = require("express");
const router = express.Router();
/// middleware
const { authMiddleware } = require("../all_routes/middleware");

/// USER ROUTES ///
const {
  userRegister,
} = require("../routes/userdata_routes/auth/user_register");
const { userLogin } = require("../routes/userdata_routes/auth/user_login");
const { userDelete } = require("../routes/userdata_routes/auth/user_delete");
const { getAllUsers } = require("../routes/userdata_routes/auth/all_user");
const { updateUser } = require("../routes/userdata_routes/auth/user_update");
const {
  forgotPassword,
} = require("../routes/userdata_routes/auth/user_forgot_password");
const {
  resetPassword,
} = require("../routes/userdata_routes/auth/user_resetpassword");
const {
  addCart,
} = require("../routes/userdata_routes/add_cart/use_add_cart_product");
const {
  showCartData,
} = require("../routes/userdata_routes/add_cart/user_all_cartdata");
const {
  addReview,
} = require("../routes/userdata_routes/reviews/user_add_review_product");

const {
  removeCartData,
} = require("../routes/userdata_routes/add_cart/user_remove_cartdata");
const {
  getAllReviewsProduct,
} = require("../routes/userdata_routes/reviews/use_get_all_reviews_product");
const { crateOrder } = require("../routes/userdata_routes/orders/crate_order");
const {
  cnacleOrder,
} = require("../routes/userdata_routes/orders/remove_order");
const { allOrder } = require("../routes/userdata_routes/orders/all_order");
const {
  userGetAllOrders,
} = require("../routes/userdata_routes/orders/user_all_order");
const {
  initializePaymentRazorpay,
} = require("../routes/userdata_routes/payment/razorpay_pyment");
const {
  paypalPayment,
} = require("../routes/userdata_routes/payment/paypal_payment");
const {
  addFavorite,
} = require("../routes/userdata_routes/favorite/add_favorite");
const {
  allFavorite,
} = require("../routes/userdata_routes/favorite/all_favorite");
const {
  removeFavorite,
} = require("../routes/userdata_routes/favorite/remove_favorite");
const {
  searchProduct,
} = require("../routes/userdata_routes/search/search_product");

router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.delete("/user/delete/:id", authMiddleware, userDelete);
router.post("/user/resetPassword/:token", resetPassword);
router.post("/user/forgotPassword", forgotPassword);
router.put("/user/update/:id", authMiddleware, updateUser);
router.get("/user/getAllUsers", getAllUsers);
router.post("/user/addCart", authMiddleware, addCart);
router.post("/user/showCartData", authMiddleware, showCartData);
router.delete("/user/removeCartData", authMiddleware, removeCartData);
router.post("/user/addReview", authMiddleware, addReview);
router.get("/user/getAllReviewsProduct", authMiddleware, getAllReviewsProduct);
router.post("/user/createOrder", authMiddleware, crateOrder);
router.post("/user/cnacleOrder", authMiddleware, cnacleOrder);
router.get("/user/allOrder", authMiddleware, allOrder);
router.post("/user/userGetAllOrders", authMiddleware, userGetAllOrders);
router.post(
  "/user/initializePaymentRazorpay",
  authMiddleware,
  initializePaymentRazorpay
);
router.post("/user/paypalPayment", authMiddleware, paypalPayment);
router.post("/user/addFavorite", authMiddleware, addFavorite);
router.post("/user/allFavorite", authMiddleware, allFavorite);
router.post("/user/removeFavorite", authMiddleware, removeFavorite);
router.get("/user/searchProduct", searchProduct);

/// PRODUCT ROUTES ///
const { addProduct } = require("../routes/product_routes/add_product");
const { getAllProducts } = require("../routes/product_routes/all_product");
const { updateProduct } = require("../routes/product_routes/update_product");
const { deleteProduct } = require("../routes/product_routes/delete_product");
const { getProductByid } = require("../routes/product_routes/details_product");

router.post("/product/addProductData", addProduct);
router.get("/product/getAllProducts", getAllProducts);
router.put("/product/updateProduct/:id", updateProduct);
router.delete("/product/deleteProduct/:id", deleteProduct);
router.get("/product/getProductByid/:id", getProductByid);

module.exports = router;
