const express = require("express");
const router = express.Router(); //construtor de rotas do contexto do express
const { index, success, error, upload } = require("../controllers/upload");

router.get("/", index);
router.post("/upload", upload);
router.get("/success", success);
router.get("/error", error);

module.exports = router;