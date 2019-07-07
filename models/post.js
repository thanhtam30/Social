const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  views:{type:Number,default:0}
  ,

  Detail: {
    type: String
  },
  Image:{type:Array},
  Like: [
    {
      User: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],

  Comment: [
    {
      User: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      Comment: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
