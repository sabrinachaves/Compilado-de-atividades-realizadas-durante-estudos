const multer = require("multer");
// permite trabalhar com múltiplos arquivos. O files vem do name no ejs

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
      },
      filename: (req, file, cb) => {
        const { originalname} = file;
        const fileName = Date.now();
        const ext = originalname.split(".").pop();
        cb(null, `${fileName}.${ext}`);
      }
});

const limits = {
    fileSize: 1024 * 1024
}

const fileFilter = (req, file, cb) =>{
    const { mimetype } = file;
    const supported = ["image/jpeg", "image/png"];

    if(supported.includes(mimetype)){
        cb(null, true);
    }else{
        cb(null, false);
    }
}


const multipleUpload = multer({ storage, limits, fileFilter }).array("files"); // aplicando a configuração do storage

exports.index = (req, res) => {
    res.render("index");
};

exports.upload = (req, res) =>{

    multipleUpload(req, res, (err) =>{
        console.log(req.files);
        if(req.files.length > 0){
            res.render("success");
        }else{
            res.render("error");
        }
    });
    
};

exports.success = (req, res) =>{
    res.render("success");
};

exports.error = (req, res)=>{
    res.render("error");
};