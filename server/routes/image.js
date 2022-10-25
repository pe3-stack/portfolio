let upload = require('./routes/upload');
let Grid = require('gridfs-stream')
let express = require('express');
let mongoose = require('mongoose');
let helmet = require('helmet');
let app = express();
let port = process.env.PORT || 8080;
require('dotenv/config');

const mongoURI = process.env.DB_CONNECTION;
const conn = mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

let gfs;
conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'images'
    })
})


const storage = new GridFsStorage({
    url: mongoURI,
    options: { useUnifiedTopology: true },
    file: (req, file) => {
        return new Promise((resolve, reject)=> {
        crypto.randomBytes(16, (err, buf) => {
           
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname
            })
        })
        
       
    }
})