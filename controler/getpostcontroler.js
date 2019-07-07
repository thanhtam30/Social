const Post=require('../models/post');
module.exports.getpost=(req,res)=>{
    Post.find()
    .populate('User',['fullName','Image','-_id'])
    .then(pro=>{
        res.status(200).json(pro)
    }).catch(console.log)
}
module.exports.geteditpost=(req,res)=>{
    Post.findById(req.params.id).then((pro)=>{
        res.status(200).json(pro)
    }).catch(console.log)
}
module.exports.deletepost=(req,res)=>{
    Post.findByIdAndDelete(req.params.id).then(pro=>{
        res.status(200).json(pro)
    }).catch(console.log)
}