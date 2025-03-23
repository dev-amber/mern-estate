import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.model.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your  own account"));
  try {
    //hash password
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your account!"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    next(error);
  }
};

//listing
export const getUserListings = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "You can only view your own listing"));
    }

    const listings = await Listing.find({ useRef: req.user.id });

    // console.log("🚀 ~ getUserListings ~ req.user.id:", req.user.id)
    // console.log("🚀 ~ getUserListings ~ listings:", listings)
    res.status(200).json({ success: true, listings });
  } catch (error) {
    next(error);
  }
};

//the information we take for contact api 
export const getUser=async(req,res,next)=>{
  try {
    const user=await User.findById(req.params.id);

if(!user)
  return next(errorHandler(404,'User not found'));

const {password:pass,...rest}=user._doc;
res.status(200).json(rest);
  } catch (error) {
    next(error);
  }

}

