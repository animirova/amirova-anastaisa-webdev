/**
 * Created by ani on 8/08/17.
 */
var mongoose = require('mongoose');
var userSchema = mongoose
    .Schema(
        {   username : String,
            password : String,
            firstNae : String,
            lastName : String,
            email :    String,
            phone :    String,
            websites : [{type : mongoose.Schema.Types.ObjectId, ref:"websiteModel"}],
            dateCreated : {type : Date, default : Date.now()},
            isAdmin : {type : Boolean, default : false}

        }, {collection : "user"});

module.exports = userSchema;