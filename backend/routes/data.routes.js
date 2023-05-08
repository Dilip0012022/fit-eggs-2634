const express = require("express");
const dataRouter = express.Router();
const {DataModel} = require("../models/user.model");
const {auth}=require("./middlewares/auth")


dataRouter.use(auth)
dataRouter.post("/", async (req, res) => {
  try {
    const { id,img1,img2,desc,category,price,size,color} = req.body;
    const data = new DataModel({id,img1,img2,desc,category,price,size,color});
    await data.save();
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

dataRouter.get("/", async (req, res) => {
  try {
    const data = await DataModel.find();
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

dataRouter.get("/:id", async (req, res) => {
  try {
    const data = await DataModel.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
dataRouter.put("/:id", async (req, res) => {
  try {
    const { type, name, color, size, price } = req.body;
    const data = await DataModel.findByIdAndUpdate(
      req.params.id,
      { type, name, color, size, price },
      { new: true }
    );
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
dataRouter.delete("/:id", async (req, res) => {
  try {
    const data = await DataModel.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    return res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
dataRouter.get("/sort/price", async (req, res) => {
  try {
    const data = await DataModel.find().sort({ price: 1 });
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
dataRouter.get("/filter/color/:color", async (req, res) => {
  try {
    const data = await DataModel.find({ color: req.params.color });
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = {DataModel};
