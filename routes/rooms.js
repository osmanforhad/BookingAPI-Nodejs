import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE Room
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE Room
router.put("/:id", verifyAdmin, updateRoom);

//Delete Room
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//Get and Read single Room info
router.get("/:id", getRoom);

//Get All Room record
router.get("/", getRooms);

export default router;