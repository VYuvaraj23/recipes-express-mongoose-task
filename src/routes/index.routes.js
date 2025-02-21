import express from "express";
import recipesRoute from "./recipes.routes.js";
const router = express.Router();

router.use("/recipes", recipesRoute);

export default router;
