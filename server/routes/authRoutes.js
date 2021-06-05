const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

const { checkUser } = require("../middleware/authMiddleware");

router.post("/api/signup", authController.signup_post);
router.post("/api/login", authController.login_post);
router.post(
  "/api/forgotPassword",

  authController.forgot_password_post
);
router.patch(
  "/resetPassword/:token",

  authController.reset_password_patch
);

router.patch(
  "/api/updatePassword",
  checkUser,
  authController.update_password_patch
);

module.exports = router;
