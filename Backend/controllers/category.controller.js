const categoryModel = require("../models/category.model");

exports.GetAllCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    if (!category) {
      res.status(400).json({
        success: false,
        message: "category not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "All Category",
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.CreateNewCategory = async (req, res) => {
  // Read the req body
  const { name, description } = req.body;
  // if (!name || !description) {
  //   res.status(400).json({
  //     success: false,
  //     message: "fields! are not in reqBody",
  //   });
  // }
  // Create the category object
  // Insert into MongoDb
  try {
    const category = await categoryModel.create({ name, description });
    return res.status(201).json({
      success: true,
      message: "Category is ceated!",
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error while createing the category ${error.message}`,
    });
  }

  // return response to created category
};
