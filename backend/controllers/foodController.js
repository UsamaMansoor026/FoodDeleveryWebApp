import foodModel from "../models/foodModel.js";
import fs from "fs"; // The file system is pre-build in Node js

/* 
    Basically the controller is the API functions that executed when the certail API Endpoint hits.
*/

// Add Food Item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save(); // this save method store the food in the database
    res.json({ success: true, message: "Food Added successfully" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "An Error Occured" });
  }
};

// List all Food Items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "An Error Occured" });
  }
};

// Remove Food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Food Deleted Successfully" });
  }
};

export { addFood, listFood, removeFood };
