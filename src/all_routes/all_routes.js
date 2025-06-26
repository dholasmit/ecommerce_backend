const express = require("express");
const router = express.Router();

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

router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.delete("/user/delete/:id", userDelete);
router.post("/user/resetPassword/:token", resetPassword);
router.post("/user/forgotPassword", forgotPassword);
router.put("/user/update/:id", updateUser);
router.get("/user/getAllUsers", getAllUsers);
router.post("/user/addCart", addCart);
router.post("/user/showCartData", showCartData);
router.delete("/user/removeCartData", removeCartData);
router.post("/user/addReview", addReview);
router.get("/user/getAllReviewsProduct", getAllReviewsProduct);

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
