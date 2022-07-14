import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (request, response, next) => {
//     response.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (request, response, next) => {
//     response.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (request, response, next) => {
//     response.send("hello admin, you are logged in and you can delete any account");
// });

//UPDATE User
router.put("/:id", verifyUser, updateUser);

//Delete User
router.delete("/:id", verifyUser, deleteUser);

//Get and Read single User info
router.get("/:id", verifyUser, getUser);

//Get All User record
router.get("/", verifyAdmin, getUsers);


export default router;