import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (request, response, next) => {
    const hotelId = request.params.hotelId;
    const newRoom = new Room(request.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id},
            });
        } catch(error){
            next(error)
        }
        response.status(200).json(savedRoom);
    } catch(error){
        next(error);
    }
};

export const updateRoom = async(request, response, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(request.params.id, {$set: request.body}, {new:true});
        response.status(200).json(updatedRoom);
    } catch(error){
        next(error);
    }
}

export const deleteRoom = async(request, response, next) => {
    const hotelId = request.params.hotelId;
    try{
        await Room.findByIdAndDelete(request.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: request.params.id},
            });
        } catch(error){
            next(error)
        }
        response.status(200).json("Room has been deleted");
    } catch(error){
        next(error);
    }
}

export const getRoom = async(request, response, next) => {
    try{
        const room = await Room.findById(request.params.id);
        response.status(200).json(room);
    } catch(error){
        next(error);
    }
}

export const getRooms = async(request, response, next) => {
    try{
        const rooms = await Room.find();
        response.status(200).json(rooms);
    } catch(error){
        next(error);
    }
}