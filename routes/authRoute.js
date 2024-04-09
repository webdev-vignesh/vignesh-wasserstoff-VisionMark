import { Router } from "express";
import { signUpController } from "../controllers/authController.js";

const router = Router();

router.post("/signup", signUpController);
// router.post("/signin");

export default router;