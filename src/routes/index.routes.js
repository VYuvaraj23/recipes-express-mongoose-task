import express from "express";
import recipesRoute from "./recipes.routes.js";
const router = express.Router();

router.use("/recipes", recipesRoute);
router.get("/", (req, res) => {
  res.status(200).send("<h1>Recipes App</h1>");
  res.end();
});

export default router;
