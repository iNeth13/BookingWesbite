import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: String,
});

mongoose.models = {};

export default mongoose.model("rooms", roomSchema);
