import mongoose, { mongo } from "mongoose";

/* Schema is the properties that we want to store in our databse in a collection (Table) */
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

/* Now creating the Model -> Collection OR Table in Database */
/* 1st parameter is the name of Model and 2nd one is the Schema */

/* We are doing this to prevent the creation of same Model again and again, because if we dont do this then on every refresh in this file created the Model named food. So we check if the model named "food" is already created then don't create this model again. */
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
