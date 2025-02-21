import mongoose from "mongoose";
import config from "../config/index.config.js";

mongoose
  .connect(config.MONGODB_URL)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.log("MongoDB Connected Failed : ", err));

export default mongoose;
