import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getSingleListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};


//delete listing
export const deleteListing=async(req,res,next)=>{
  //first check it exist or not
  const listing=await Listing.findById(req.params.id);

  if(!listing){
return next(errorHandler(404,"listing not foumd"));
  }
  if(req.user.id !==listing.useRef){
    return next(errorHandler(401,"you can only delete yourown listing"));
  
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("listing deleted successfully");
  } catch (error) {
    next(error);
  }
};


//update listing
export const updateListing=async(req,res,next)=>{
  //first check exist or not
  const listing=await Listing.findById(req.params.id);
  if(!listing){
    return next(errorHandler(404,'Listing not found'));

  }
  //if exist
  if(req.user.id !== listing .useRef){
    return next(errorHandler(401,"you can only update your own listings!"));
  }
  try {
    const updatedListing=await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
  
}

//getLIsting
export const getListing=async(req,res,next)=>{
  try {
    const listing=await Listing.findById(req.params.id);
    if(!listing){
      return next(errorHandler(401,"Listing not found"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
}