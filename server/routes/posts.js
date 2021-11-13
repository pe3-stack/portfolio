// const express = require("express");
// const router = express.Router();
// const Post = require("../models/Post");
// /*
// const jwt = require("jsonwebtoken");


// const token = jwt.sign(
//   {
//     data: "foobar",
//   },
//   "secret",
//   { expiresIn: "1h" }
// );

// const verify = (req, res, next) => {
//   try {
//     jwt.verify(req.headers.authorization, "secret", (err, verify) => {
//       if (err) {
//         res.status(400).json({
//           "msg": "Error occurred " + err,
//         });
//       } else {
//         console.log(verify);
//         next();
//       }
//     });
//   } catch (error) {
//     res.status(400).json({
//       "msg": "Auth token failed or invalid",
//     });
//   }
// };
// */

// // GET POSTS
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// // POST a POST
// router.post("/", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });

//   post
//     .save()
//     .then((data) => {
//       res.json({
//         code: "200",
//         token,
//         data,
//       });
//     })
//     .catch((err) => {
//       res.json({ message: err });
//     });
// });

// module.exports = router;
