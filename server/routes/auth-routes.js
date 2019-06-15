const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

process.env.SECRET_KEY = "secret";

router.get("/login", (req, res) => res.send("login"));
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email }).then(user => {
    if (user) {
      if (UserModel().comparePassword(password, user.password)) {
        const payload = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        };
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.send(token);
      } else {
        res.json({ error: "User does not exist" });
      }
    } else {
      res.json({ error: "User does not exist" });
    }
  });
});

router.get("/service", (req, res) => {
  res.send("hello worldaa");
});

module.exports = router;
