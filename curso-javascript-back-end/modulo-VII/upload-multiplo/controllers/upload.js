exports.index = (req, res) => {
  res.render("index");
};

exports.upload = (req, res) => {
  const multer = require("multer");
  // permite trabalhar com múltiplos arquivos. O files vem do name no ejs
  const storage = require("../config/diskStorage")(multer);
  const limits = require("../config/filefilter");
  const fileFilter = require("../config/filefilter");
  const multipleUpload = multer({ storage, limits, fileFilter }).array("files"); // aplicando a configuração do storage

  multipleUpload(req, res, (err) => {
    console.log(req.files);
    if (req.files.length > 0) {
      res.render("success", { images: req.files });
    } else {
      res.render("error");
    }
  });
};

exports.success = (req, res) => {
  res.render("success");
};

exports.error = (req, res) => {
  res.render("error");
};
