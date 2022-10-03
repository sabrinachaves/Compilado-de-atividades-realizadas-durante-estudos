const express = require("express");
const router = express.Router();
const { createProduct,
getAllProducts,
getProductById,
updateProduct,
updateProductPartial,
removeProduct } = require("../controllers/productsController");

router.post("/", createProduct);

router.get("/", getAllProducts);

router.get("/:id", getProductById);

//atualização total 
router.put("/:id", updateProduct);

//atualização parcial
 router.patch("/:id", updateProductPartial);

 router.delete("/:id", removeProduct);

module.exports = router;