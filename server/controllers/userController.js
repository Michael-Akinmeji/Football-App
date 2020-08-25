import express from "express";
import User from "../models/UserModel";

const router = express.Router();

// Get all users

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
