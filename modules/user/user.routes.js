import express from "express";
import { registerUser, loginUser, changePassword, getUserProfile, updateUserProfile } from "./user.controller.js";
import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} from "./user.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", validateRequest(registerSchema), registerUser);
router.post("/login", validateRequest(loginSchema), loginUser);
router.put(
  "/change-password",
  protect,
  validateRequest(changePasswordSchema),
  changePassword
);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

export default router;
