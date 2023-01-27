import mongoose from "mongoose";

const conectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
}

export default conectDB;