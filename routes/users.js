import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();

//UPDATE User
router.put("/:id", updateUser);

//Delete User
router.delete("/:id", deleteUser);

//Get and Read single User info
router.get("/:id", getUser);

//Get All User record
router.get("/", getUsers);


export default router;