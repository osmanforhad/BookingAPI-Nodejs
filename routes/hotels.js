import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

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