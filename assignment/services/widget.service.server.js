/**
 * Created by ani on 8/2/17.
 */
var app = require("../express");

// http handlers
app.post("/api/page/:pageId/widget", createWidget);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.delete("/api/widget/:widgetId", deleteWidget);

function createWidget(req, response) {
    var pageId = widget.pageId;
    var wgId = (new Date).getTime() + "";
    widget._id = wgId;
    widget.pageId = pageId;
    widgets.push(widget);
    return widget;
}

function findAllWidgetsForPage(req, response) {
    var widgetList = [];
    for(var w in widgets){
        var currW = widgets[w];
        if(currW.pageId == pageId){
            widgetList.push(currW);
        }
    }
    return widgetList;
}

function findWidgetById(req, response) {
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id == widgetId){
            return currW;
        }
    }
}

function updateWidget(req, response) {
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id == widgetId){
            widgets[w] = widget;
            console.log(widget)
            return;
        }
    }
}

function deleteWidget(req, response) {
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id == widgetId){
            delete widgets[w];
            console.log(widgets);
            return;
        }
    }
}