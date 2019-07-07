const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String},
    Image:{type:Array},
    Address: { type: String },
    Phone: { type: String },
    DOB: { type: Date },
    Status: {
      type: String
    },
    date:{type:Date,default:Date.now}
})
module.exports=mongoose.model('User',UserSchema);