const ProductCategory = require("../models/productCategoryModel");

// Get all products
exports.getAllProductCategory = async (req, res) => {
  try {
    const productCategory = await ProductCategory.find();
    res.json(productCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get product by ID
exports.getProductCategoryById = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findById(req.params.id);
    if (!productCategory) return res.status(404).json({ error: "Product Category not found" });
    res.json(productCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// Add a new product
exports.addProductCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    
    const productCategory = new ProductCategory({ name, description });
    console.log('test')
    await productCategory.save();
    console.log('test1')
    res.status(201).json(productCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product Category" });
  }
};

// Update a Product Category
exports.updateProductCategory = async (req, res) => {
  try {
    const updatedProductCategory = await ProductCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProductCategory) return res.status(404).json({ error: "Product Category not found" });
    res.json(updatedProductCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Product Category" });
  }
};

// Delete a product
exports.deleteProductCategory = async (req, res) => {
  try {
    const deletedProductCategory = await ProductCategory.findByIdAndDelete(req.params.id);
    if (!deletedProductCategory) return res.status(404).json({ error: "Product Category not found" });
    res.json({ message: "Product Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product Category" });
  }
};
