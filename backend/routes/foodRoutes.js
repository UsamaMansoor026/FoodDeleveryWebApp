import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

// Multer is used for storing the Images
import multer from "multer";

// Creating the Router and by using this router we can make the Https methods like (GET, POST, PUT, DELETE etc)
const foodRouter = express.Router();

// Image Storage Logic
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callBack) => {
    return callBack(null, `${Date.now()}${file.originalname}`); // This create a unique name of each file
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
