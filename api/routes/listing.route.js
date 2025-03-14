import express from "express";
import {
  createListing,
  getSingleListing,
  deleteListing,
  updateListing,
  getListing,
  
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id",verifyToken,deleteListing);
router.post("/update/:id",verifyToken,updateListing);
router.get("/get/:id",getListing);
router.get("/get/:id", getSingleListing);

export default router;
