import recipesModel from "../model/recipes.model.js";

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesModel.find();
    res
      .status(200)
      .send({ message: "Data Fetch Successfully!", data: recipes });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
};

const createRecipe = async (req, res) => {
  try {
    const reqBody = req.body;
    const recipe = await recipesModel.findOne({ title: reqBody.title });
    if (!recipe) {
      await recipesModel.insertOne(reqBody);
      res.status(201).send({ message: "Recipe Created Successfully!" });
    } else {
      res
        .status(400)
        .send({ message: `Recipe ${reqBody.title} already exists!` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipesModel.findOne({ _id: id });
    res.status(200).send({
      message: `${recipe.title} recipe fetch successfully!`,
      data: recipe,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
};

const updateRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;

    await recipesModel.updateOne({ _id: id }, { $set: req.body });
    res.status(200).send({ message: "recipe updated successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
};

const deleteRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;
    await recipesModel.deleteOne({ _id: id });
    res.status(200).send({ message: "Recipe Deleted Successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
};

export {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipeByID,
  deleteRecipeByID,
};
