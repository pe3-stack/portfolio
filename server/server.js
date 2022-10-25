const upload = require("./routes/upload");
const contactRoute = require("./routes/contactRoutes");
const infoRoutes = require("./routes/infoRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

let Grid = require("gridfs-stream");
let express = require("express");
let mongoose = require("mongoose");
let helmet = require("helmet");
let app = express();
let port = process.env.PORT || 8080;
require("dotenv/config");

app.use(express.urlencoded({limit: '500mb', extended: true }));
app.use(express.json());
// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(helmet());

//Import Routes

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"));

// Launch app to the specified port
app.listen(port, function () {
  console.log("Running FirstRest on Port " + port);
});

app.use("/users", userRoutes);
app.use("/info", infoRoutes);
app.use("/files", upload);
app.use("/contact", contactRoute);
app.use("/products", productRoutes);

//errors
app.use(notFound);
app.use(errorHandler);

//connect to mongoose
const conn = mongoose.connection;

const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(process.env.DB_CONNECTION, options);
mongo.then(
  () => {
    console.log("connected to DB");
  },
  (error) => {
    console.log(error, "error");
  }
);

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  // add value to new var
  gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'fs'
  });

});