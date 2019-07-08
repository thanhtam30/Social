const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/user");
const {
  validatorsignin,
  validatorLogin,
  validatorprofile
} = require("../../validator/validatoruser");
const keys = require("../../config/keys");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./client/public/upload/user/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
var upload = multer({
  //multer settings
  storage: storage
  // fileFilter: function (req, file, callback) {
  //     var ext = path.extname(file.originalname);
  //     if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
  //         return callback(new Error('Only images are allowed'))
  //     }
  //     callback(null, true)
  // },
  // limits:{
  //     fileSize: 1024 * 1024
  // }
});
router.post("/signin",  (req, res) => {
  const { errors, isValid } = validatorsignin(req.body);
  if (!isValid) return res.status(400).json(errors);
  const { fullName, email, password } = req.body;
  
  User.findOne({ email }).then(user => {
    if (user) {
      if (user.email === email) {
        errors.noemail = "Email is used";
      }
      return res.status(400).json(errors);
    }
    const newUser = new User({
      fullName,
      email,
      password
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).json(err);

      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(400).json(err);

        newUser.password = hash;
        newUser
          .save()
          .then(user => {
    
            res.status(200).json(user);
          })
          .catch(err => res.status(400).json(err));
      });
    });
  });
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validatorLogin(req.body);
  if (!isValid) return res.status(400).json(errors);
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ noemail: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          fullName: user.fullName,
          Image: user.Image
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ nopassword: "Password incorrect" });
      }
    });
  });
});
router.post("/updateimageuser/:id", upload.any(), (req, res) => {
  //check image
  const images=[];
  for(let i=0;i<req.files.length;i++){
      images.unshift(req.files[i].filename)
  } 
  
  User.findById(req.params.id).then(user => {
    // if (typeof req.file == "undefined") {
    //   user.save().then(user => {
    //     res.status(200).json(user);
    //   });
    // } else {
    //   user.Image = req.file.filename;
    //   user.save().then(user => {
    //     res.status(200).json(user);
    //   });
    // }
    user.Image = user.Image.concat(images);
      user.save().then(user => {
        res.status(200).json(user);
      });
  });
});
//update profile user
router.post("/updateuser/:id",(req,res)=>{
  const {Address,Phone,DOB,Status}=req.body;
  const { errors, isValid } = validatorprofile(req.body);
  if (!isValid) return res.status(400).json(errors);
  
  User.findById(req.params.id).then((user)=>{
    user.Address=Address;
    user.Phone=Phone;
    user.DOB=DOB;
    user.Status=Status;
    user.Date=Date.now
    user.save().then((user)=>{
      
      res.status(200).json(user)
    })
  }).catch(console.log)
})
///preview user
router.get('/previewuser/:id',(req,res)=>{
  User.findById(req.params.id).then((user)=>{
    res.status(200).json(user)
  }).catch(console.log)
})
//delete user
router.delete('/deleteuser/:id',(req,res)=>{
  User.findByIdAndDelete(req.params.id).then((user)=>{
    res.status(200).json(user);
  })
})
//view all user
router.get('/alluser',(req,res)=>{
  User.find().then((user)=>{
    res.status(200).json(user)
  }).catch(console.log)
})
module.exports = router;
