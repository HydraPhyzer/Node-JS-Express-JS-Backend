const multer=require('multer')
let express = require("express");
let App = express();
// App.use(express.json());



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ".jpg"
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single('Filer')

App.post("/upload", upload ,async (Req, Res) => {
    Res.send("File Uploaded")
});

App.listen(3000);
