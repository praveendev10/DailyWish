import { Router } from "express";
import { createUser, removeUser } from "../controller/user.controller";
const router = Router();

router.post("/createuser", createUser);
router.delete("/removeuser", removeUser);
export default router;
