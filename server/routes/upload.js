require('dotenv').config();
const upload = require("../controllers/upload"),
 express = require("express"),
 router = express.Router();

//@route GET /
//@desc Display all files 
router.get('/',(req, res) => {
    gfs.files.find().toArray((err, files) => {
        if(!files || files === 0) {
            return res.status(404).json({
                err: "No file exists"
            })
        }
        return res.send(files);
    })
});

//@route GET /image:filename
//@desc Display Image 
router.get('/:filename',(req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if(!file || file.length === 0) {
            return res.status(404).json({
                err: "No file exists"
            })
        }

        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'application/pdf') {
            res.setHeader('Content-Type', file.contentType);
            res.setHeader('Content-Length', file.length);
            
            const readStream = gridFSBucket.openDownloadStream(file._id);
            readStream.pipe(res);
            
        } else {
            res.status(404).json({
                err: "Not an image"
            })
        }
    })
});

//@route POST /
//@desc Insert a file 
router.post("/upload", upload.single("file"), (req ,res) => {
    if(req.file === undefined) return res.send("you must select a file");
    const imgUrl = `${process.env.URL}/files/${req.file.filename}`;
    return res.send(imgUrl);
})

module.exports = router;