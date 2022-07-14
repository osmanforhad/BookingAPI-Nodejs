import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE Hotel
router.post("/", verifyAdmin, createHotel);

//UPDATE Hotel
router.put("/:id", verifyAdmin, updateHotel);

//Delete Hotel
router.delete("/:id", verifyAdmin, deleteHotel);

//Get and Read single Hotel info
router.get("/find/:id", getHotel);

//Get All hotel record
router.get("/", getHotels);
router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);


export default router;