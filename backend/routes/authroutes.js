import express from "express";
import { logout, signin, signup } from "../controllers/auth.controllers.js";

const router=express.Router();
router.use(express.json())


router.post("/signup",signup)

router.post("/logout",logout)

router.post("/signin",signin)

export default router;
