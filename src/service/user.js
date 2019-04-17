const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost/login_express_example_db");

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
  address: String
})
var User = mongoose.model("userSchema", UserSchema);

const router = express.Router();
router.use(bodyParser.json());

router.post("/createUser", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    address: req.body.name
  })

  User.find({username: req.body.username}, (err, response) => {
    if(respnse.length < 1) {
      newUser.save((err, response) => {
        if(err) {
          res.json({message: err, status: "reject"})
        } else {
          res.json({message: "New User Created With Username" + response.username, status:"success", username: response.username})
        }
      })
    } else {
      res.json({message: "username already exists!"})
    }
  })

})

router.post("/login", (req, res) => {
  console.log(req.body)
  User.find({username: req.body.username, password: req.body.password}, (err, response) => {
    console.log(response)
    if(err) {
      res.send(err);
    } else if(!response.length < 1) {
      res.json({message: "success", username: response.username})
    } else {
      res.send({message: "reject"})
    }
  })
})


module.exports = router;
