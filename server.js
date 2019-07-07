const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport')

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true,useFindAndModify:false } )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


require('./config/passport')(passport);
app.use(passport.initialize());
 app.use("/api/post", require("./routes/api/post"));
app.use('/api/user',require('./routes/api/user'));

// Server static assets if in production

const port=process.env.PORT||5000;
app.listen(port,console.log(`Server started on port ${port}`))