const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts");

// get contact
router.get('/',function(req,res,next){
    Contact.find({}).then(function(contact){  
        res.send(contact);
    }).catch(next);
});

module.exports = router;

  