const express = require("express");
const router = express.Router();
const productCategoryController = require("../controllers/productCategoryController");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/", authMiddleware,productCategoryController.getAllProductCategory);
router.get("/:id",authMiddleware, productCategoryController.getProductCategoryById);
router.post("/", authMiddleware, productCategoryController.addProductCategory);  
router.put("/:id", authMiddleware, productCategoryController.updateProductCategory); 
router.delete("/:id", authMiddleware, productCategoryController.deleteProductCategory);

module.exports = router;
