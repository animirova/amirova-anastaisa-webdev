/**
 * Created by ani on 8/11/17.
 */

var mongoose = require('mongoose');
var websiteSchema = mongoose
    .Schema(
        {   user : {type : mongoose.Schema.Types.ObjectId, ref : "userModel"},
            name : String,
            description : String,
            pages :    [{type : mongoose.Schema.Types.ObjectId, ref : "pageModel"}],
            dateCreated : {type : Date, default : Date.now()}
        }, {collection : "website"});

module.exports = websiteSchema;

