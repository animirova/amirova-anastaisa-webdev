/**
 * Created by ani on 8/11/17.
 */
var mongoose = require('mongoose');
var db = require ('../models.server.js');
var pageModel = require('../page/page.model.server.js');

var widgetSchema = require('./widget.schema.server.js');
var widgetModel = mongoose.model("widgetModel", widgetSchema);

widgetModel.createWidget = createWidget;
// pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;

module.exports = widgetModel;

function createWidget(widget) {
    var tempWg = null;
    return widgetModel.create(widget)
        .then(function (r) {
            tempWg = r;
            pageModel.newWidget(r._id, widget._page);
        }).then(function (_r) {
            return tempWg;
        });
}

function findWidgetById(wid) {
    return widgetModel.findById(wid);
}

function updateWidget(widget) {
    return widgetModel.update({ _id : widget._id}, {$set : widget});
}

function deleteWidget(widgetId, pid) {
    console.log(pid);

    return widgetModel.remove({ _id : widgetId })
        .then(function (r) {
            return pageModel.deleteWidget(widgetId, pid);
        })
}