import mongoose from "./index.model.js";

const recipesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  cookingTime: { type: Number, required: true },
}, {
  collection: "recipes",
  versionKey:false
});


const recipesModel = mongoose.model("recipes",recipesSchema)

export default recipesModel
