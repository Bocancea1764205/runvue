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

router.get("/api/signup", authController.signup_get);
router.post("/api/signup", authController.signup_post);
router.get("/api/login", authController.login_get);
router.post("/api/login", authController.login_post);
router.get("/api/logout", authController.logout_get);

router.get("/api/forgotPassword", authController.forgot_password_get);
router.post("/api/forgotPassword", authController.forgot_password_post);
router.get("/api/resetPassword/:token", authController.reset_password_get);
router.patch("/api/resetPassword/:token", authController.reset_password_patch);

router.patch(
  "/api/updatePassword",
  checkUser,
  authController.update_password_patch
);

module.exports = router;
