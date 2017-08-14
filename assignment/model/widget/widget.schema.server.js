/**
 * Created by ani on 8/08/17.
 */
var widgetTypes = ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT'];
var mongoose = require('mongoose');
var widgetSchema = mongoose
    .Schema(
        {
            _page :    {type : mongoose.Schema.Types.ObjectId, ref : "pageModel"},
            type : {type : String, enum : widgetTypes},
            name : String,
            text : String,
            placeholder : String,
            description : String,
            url : String,
            width : String,
            height : String,
            rows : Number,
            size : Number,
            class : String,
            icon : String,
            deletable : Boolean,
            formatted : Boolean,
            dateCreated : {type : Date, default : Date.now()}
        }, {collection : "widget"});

module.exports = widgetSchema;