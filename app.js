const express = require('express') 
const app = express();
const mongoose = require('mongoose')
const morgan = require(`morgan`)
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv')
dotenv.config()

const postRoutes = require('./routes/post');


//db
 mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>  console.log('DB Connected')); 

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});
 

//Middleware
app.use((req, res, next) => {
    console.log('New request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method', req.method);
    next();
}); 

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`A Node.js API is listing on port: ${port}`);
});