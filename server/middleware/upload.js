const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
require('dotenv').config();

const storage = new GridFsStorage({
    url: process.env.DB_CONNECTION,
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, file) => {
        const match = ["image/png", "image/jpeg", "application/pdf"];

        if(match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-icon-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "images",
            filename: `${Date.now()}-${file.originalname}`
        }
    }
})

module.exports = multer({ storage })