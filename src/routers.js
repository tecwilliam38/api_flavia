import { Router } from "express";
import jwt from "../token.js";
import ControllerUser from "./Controllers/user.controller.js"
import ControllerAdmin from "./Controllers/admin.controller.js"

const router = Router();
// User
// router.get("/users",)
router.post("/users/register", ControllerUser.Register);
router.post("/users/login", ControllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, ControllerUser.Profile);


// Admin
router.post("/admin/register", ControllerAdmin.RegisterAdmin);
router.post("/admin/login", ControllerAdmin.LoginAdmin);
router.get("/admin/profile", jwt.ValidateToken, ControllerUser.Profile);

// Posts


export default router;

