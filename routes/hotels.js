import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE Hotel
router.post("/", createHotel);

//UPDATE Hotel
router.put("/:id", updateHotel);

//Delete Hotel
router.delete("/:id", deleteHotel);

//Get and Read single Hotel info
router.get("/:id", getHotel);

//Get All hotel record
router.get("/", getHotels);


export default router;