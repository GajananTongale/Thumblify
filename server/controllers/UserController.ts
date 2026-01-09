import {Request,Response} from "express";
import Thumbnail from "../models/Thumbnail.js";
import mongoose from "mongoose";


//Controllers to get All User Thumbnails

export const getUsersThumbnails = async (req:Request, res:Response) => {
    try{
        const {userId} = req.session;
        const thumbnails = await Thumbnail.find({userId}).sort({createdAt: -1})
        res.json({thumbnails})
    } catch (err:any){
        console.error(err);
        res.status(500).json({message:err.message});
    }
}

// Controllers to get single Thumbnail of a User
export const getThumbnailbyId = async (req:Request, res:Response) => {
    try{
        const {userId} = req.session;
        const {id} = req.params;

        const thumbnail = await Thumbnail.findOne({
            _id: new mongoose.Types.ObjectId(id),
            userId: new mongoose.Types.ObjectId(userId),
        });        console.log(thumbnail)
        res.json({thumbnail})
    }catch(err:any){
        console.error(err);
        res.status(500).json({message:err.message});
    }
}
