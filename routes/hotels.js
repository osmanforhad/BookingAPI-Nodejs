import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE Hotel
router.post("/", async (request, response) => {
    const newHotel = new Hotel(request.body);
    try{
        const savedHotel = await newHotel.save();
        response.status(200).json(savedHotel);
    } catch(error){
        response.status(500).json(error);
    }
});

//UPDATE Hotel
router.put("/:id", async (request, response) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(request.params.id, {$set: request.body}, {new:true});
        response.status(200).json(updatedHotel);
    } catch(error){
        response.status(500).json(error);
    }
});

//Delete Hotel
router.delete("/:id", async (request, response) => {
    try{
        await Hotel.findByIdAndDelete(request.params.id);
        response.status(200).json("Hotel has been deleted");
    } catch(error){
        response.status(500).json(error);
    }
});

//Get and Read single Hotel info
router.get("/:id", async (request, response) => {
    try{
        const hotel = await Hotel.findById(request.params.id);
        response.status(200).json(hotel);
    } catch(error){
        response.status(500).json(error);
    }
});

//Get All hotel record
//Get and Read single Hotel info
router.get("/", async (request, response) => {
    try{
        const hotels = await Hotel.find();
        response.status(200).json(hotels);
    } catch(error){
        response.status(500).json(error);
    }
});


export default router;