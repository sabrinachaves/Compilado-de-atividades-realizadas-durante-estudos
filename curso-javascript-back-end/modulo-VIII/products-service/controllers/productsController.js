const ProductDAO = require("../dao/productDAO");
const connection = require("../infra/connection")

class ProductsControllers {
    createProduct(req, res){
        console.log("POST", req.body);
        ProductDAO.save();
    };

    getAllProducts(req, res){
        console.log("GET 1", req.query, req.baseUrl, req.url);
        ProductDAO.findAll();
    };

    getProductById(req, res){
        console.log("GET 2", req.params.id);
        ProductDAO.findOne();
    };

    updateProduct(req, res){
        console.log("PUT", req.params.id);
    };

    updateProductPartial(req, res){
        console.log("PATCH", req.params.id);
    };

    removeProduct(req, res){
        console.log("DELETE", req.params.id);
    };
}

module.exports = new ProductsControllers();