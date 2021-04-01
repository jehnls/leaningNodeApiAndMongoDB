const mongoose = require('mongoose')
const { Schema } = mongoose;

const postSchema =  new Schema({
    title: {
        type: String,
        required: true,
        // minlength: 4,
        // maxlength: 150
        ///It is valideted in ../validator
    },
    body: {
        type: String,
        required: true,
        // minlength: 4,
        // maxlength: 2000
        //It is valideted in ../validator
    }
});

module.exports = mongoose.model("Post", postSchema);