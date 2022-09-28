const app = require("express")();
const env = require("dotenv").config().parsed;
const path = require("path");
const multer = require("multer");

const { PORT } = env;

//multer é o middleware para fazer o upload com o req.file

//configurando upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
      },
      filename: (req, file, cb) => {
        const { originalname } = file;
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

const upload = multer({ storage, limits, fileFilter });


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"));
    //outra opção
    // res.sendFile(path.resolve("public/index.html"));
});

app.post("/upload", upload.single("single"), (req, res)=>{

    if(req.file && req.file.size > 0){
        res.redirect("/success");
    }else{
        res.redirect("/error");
    }
    
});

app.get("/error", (req, res) =>{
    res.sendFile(path.resolve("public/error.html"));
});

app.get("/success", (req, res) =>{
    res.sendFile(path.resolve("public/success.html"));
});

app.listen(PORT, console.log(`Server running at port ${PORT}`));