const express = require("express");
const router = express.Router();
const Infos = require("../models/infos");


// get info
router.get('/',function(req,res,next){
  Infos.find({}).then(function(info){
      res.send(info);
  }).catch(next);
});

// post info
router.post("/", (req, res) => {
  const info = new Infos({
   name: req.body.name,
   role: req.body.role
 });

  info
    .save()
    .then((data) => {
      res.json({
        code: "200",
        data,
      });
    })
    .catch((err) => {
      res.json({ message: err });
    });
});



module.exports = router;
