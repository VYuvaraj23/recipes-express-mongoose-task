import express from "express";
import {
  createRecipe,
  deleteRecipeByID,
  getAllRecipes,
  getRecipeById,
  updateRecipeByID,
} from "../controller/recipes.controller.js";

const router = express.Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipeByID);
router.delete("/:id", deleteRecipeByID);

export default router;
