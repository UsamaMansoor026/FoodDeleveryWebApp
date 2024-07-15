import mongoose from "mongoose";

/* This function is used to connect project with the Mongo DB */
export const connectToDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://usama:maanmansoor026@cluster0.8ciyffl.mongodb.net/flavorbyte"
    )
    .then(() => console.log("Database Connected"));
};
