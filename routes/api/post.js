const _=require('lodash')
const Post = require("../../models/post");
const User=require('../../models/user');

const {
  getpost,
  geteditpost,
  deletepost
} = require("../../controler/getpostcontroler");
const passport = require("passport");
const express = require("express");
const {
  validatorpost,
  validatorpostcomment
} = require("../../validator/validatorpost");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./client/public/upload/post/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
var upload = multer({
  
  storage: storage

});
const router = express.Router();
router.get('/postitem/:id',(req,res)=>{
  Post.findById(req.params.id)
  .populate('User',['fullName','Image'])
  .populate('Comment.User',['fullName','Image'])
  .then(post=>{
    post.views=post.views+1;
    
    post.save().then((post)=>{
      res.status(200).json(post)
    })
  })
})
router.get("/listpost", (req,res)=>{
  Post.find()
  .sort({ date: -1 })
  .populate('User',['fullName','Image'])
  .populate('Comment.User',['fullName','Image'])
  
  .then(post=>res.json(post)
  ).catch(console.log)
});
router.post(
  "/newpost",
  
  passport.authenticate("jwt", { session: false }),upload.any(),
  (req, res) => {
    const images=[];
    for(let i=0;i<req.files.length;i++){
        images.push(req.files[i].filename)
    } 
    const {  Detail } = req.body;
    const { errors, isValid } = validatorpost(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
    
      Detail,
      Image: images,
      User: req.user.id
    });
    newPost.save().then(post=>{
      
      res.json(post)
    })
     
  }
);

//////////
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { Comment } = req.body;
    const { errors, isValid } = validatorpostcomment(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Post.findById(req.params.id).then(post => {
      const newComment=({
        Comment:req.body.Comment,
        User:req.user.id
    })
    post.Comment.push(newComment)
    post.save().then(post=>{
      
      res.json(post)
    })
    })
    .catch(console.log)
  }
);
router.get("/geteditpost/:id", geteditpost);
router.post(
  "/postupdate/:id",
  upload.any(),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const {  Detail } = req.body;
    const { errors, isValid } = validatorpost(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const images = [];
    for (let i = 0; i < req.files.length; i++) {
      images.unshift(req.files[i].filename);
    }
    Post.findById(req.params.id)
      .then(post => {
    
        post.Detail = Detail;
        post.Image = post.Image.concat(images);
        post.save().then(post => {
          
          res.status(200).json(post);
        });
      })
      .catch(console.log);
  }
);
///delete comment
router.delete(
  "/deletecomment/:id/:commentid",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id).then(post => {
      for(let i=0;i<post.Like.length;i++){
        if(post.Like[i]._id===req.params.commentid){
          post.Like.splice(i,1);
          post.save().then(post => res.json(post));
        }
      }
      
    });
  }
);
///like and unlike post
router.post('/likeandunlike/:id',  passport.authenticate("jwt", { session: false }),(req,res)=>{
  const user=req.user.id
Post.findById(req.params.id).then((post)=>{
  for(let i=0;i<post.Like.length;i++){
    if(post.Like[i].User==user){
      post.Like.splice(i,1)
          post.save().then(post => res.json(post))
                        .catch(console.log)    
                    return 
    }
  }  
  post.Like.push({User:user})
  post.save().then(post => 
    res.json(post))
    
  .catch(console.log)
  
  }).catch(console.log)
 })
///delete post
router.delete('/deletepost/:id', passport.authenticate("jwt", { session: false }),(req,res)=>{
  Post.findByIdAndDelete(req.params.id).then(post=>{
    res.json(post)
  }).catch(console.log)
})
router.get('/getpostprofile/:id', passport.authenticate("jwt", { session: false }),(req,res)=>{
  const id=req.params.id;
User.findOne({_id:id}).then(user=>{
Post.find({User:id})
.populate('User',['fullName','Image'])
  .populate('Comment.User',['fullName','Image'])
  .then((post=>{
    
  res.status(200).json(post)
}))
})
.catch(console.log)
})
//////////get editpost
router.get('/geteditpost/:id',(req,res)=>{
  Post.findById(req.params.id)
  .populate('User',['fullName','Image'])
  .populate('Comment.User',['fullName','Image'])
  .then(post=>{
    res.status(200).json(post)
  }).catch(console.log)
})
//posteditpost
router.post('/posteditpost/:id',upload.any(),(req,res)=>{
  let images=[];
  for(let i=0;i<req.files.length;i++){
    images.push(req.files[i].filename)
  }

  Post.findById(req.params.id)
  .populate('User',['fullName','Image'])
  .populate('Comment.User',['fullName','Image'])
  .then(post=>{
    post.Detail=req.body.Detail;
    post.Image=post.Image.concat(images)
    post.save().then(post=>{
      res.status(200).json(post)
    })
    
  }).catch(console.log)
})
// router.get('/getcommentedit/:id/:commentid',(req,res)=>{
//   Post.findById(req.params.id).then(post=>{
//     post.Comment
//   })
// })
module.exports = router;
