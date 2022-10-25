
let Grid = require('gridfs-stream')
let express = require('express');
let mongoose = require('mongoose');
let helmet = require('helmet');
let app = express();
let port = process.env.PORT || 8080;
require('dotenv/config');


app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(helmet());

//Import Routes
const upload = require('./routes/upload');
const infoRoute = require('./routes/infoRoutes');
const contactRoute = require('./routes/contactRoutes');
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
});

//app.use('/posts', postsRoute);
app.use("/info", infoRoute);
app.use("/files", upload);
app.use("/contact", contactRoute);

//connect to mongoose
const conn = mongoose.connection;

const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(process.env.DB_CONNECTION, options);
mongo.then(() => {
    console.log('connected to DB');
}, error => {
    console.log(error, 'error');
})

conn.once("open", function() {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("images");
})


