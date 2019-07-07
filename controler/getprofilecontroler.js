const Profile=require('../models/profile');

module.exports.getProfile=(req,res)=>{
    Profile.find()
    .populate('User',['fullName'])
    .sort({Date:-1})
    .then(pro=>{
        console.log(pro)
        res.status(200).json(pro)
    }).catch(console.log)
}
module.exports.getallProfile=(req,res)=>{
    const errors = {};

    Profile.find()
      .populate('user', ['fullName','Image'])
      .then(profiles => {
        if (!profiles) {
          errors.noprofile = 'There are no profiles';
          return res.status(404).json(errors);
        }
  
        res.json(profiles);
      })
      .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
}
module.exports.geteditProfile=(req,res)=>{
    Profile.findById(req.params.id).then((pro)=>{
        res.status(200).json(pro)
    }).catch(console.log)
}
