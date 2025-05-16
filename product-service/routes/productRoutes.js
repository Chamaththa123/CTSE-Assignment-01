const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/search",authMiddleware, productController.searchProducts);
router.get("/", authMiddleware,productController.getAllProducts);
router.get("/:id",authMiddleware, productController.getProductById);

router.post("/", authMiddleware, productController.addProduct);  
router.put("/:id", authMiddleware, productController.updateProduct); 
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
