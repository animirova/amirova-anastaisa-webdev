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

app.put("/api/page/:pageId/widget", widgetMove);

var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://www.youtube.com/embed/ycdcDFuGarM" },

    // "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

function widgetMove(req, response) {
    var sIdx = req.query.startIdx;
    var eIdx = req.query.endIdx;
    var tmpWdg = widgets[sIdx];
    widgets[sIdx] = widgets[eIdx];
    widgets[eIdx] = tmpWdg;

    response.sendStatus(200);
    return;
}


function createWidget(req, response) {
    var widget = req.body;
    widget._id = (new Date).getTime() + "";
    widgets.push(widget);
    response.send(widget);
    return widget;
}

function findAllWidgetsForPage(req, response) {
    var pageId = req.params.pageId;
    var widgetList = [];
    for(var w in widgets){
        var currW = widgets[w];
        if(currW.pageId === pageId){
            widgetList.push(currW);
        }
    }
    response.json(widgetList);
    return widgetList;
}

function findWidgetById(req, response) {
    var widgetId = req.params.widgetId;
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id === widgetId){
            response.json(widgets[w]);
            return widgets[w];
        }
    }
    response.send("0");
}

function updateWidget(req, response) {
    var widget = req.body;
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id === widget._id){
            widgets[w] = widget;
            response.json(widget);
            return;
        }
    }
    response.sendStatus(404);
}

function deleteWidget(req, response) {
    var widgetId = req.body;
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id === widgetId){
            delete widgets[w];
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
}

function findWidget(id) {
    for(var w in widgets){
        var currW = widgets[w];
        if(currW._id === id){
            return widgets[w];
        }
    }
}


var multer = require("multer");
//var upload = multer({ dest: __dirname+'../public/uploads' });
//app.post("/api/upload", upload.single('myFile'), uploadImage);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        var fileName = file.originalname;
        console.log(fileName);
        cb(null, fileName);
    }
});

var upload = multer({ storage : storage });
app.post("/api/upload", upload.single('myFile'), uploadImage);

function uploadImage(req, response) {
        var wgid      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;
        var text            = req.body.text;

        var uid = req.body.userId;
        var wid = req.body.websiteId;
        var pid = req.body.pageId;

        var originalname  = myFile.originalname;
        var filename      = myFile.filename;
        var path          = myFile.path;
        var destination   = myFile.destination;
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        var widget = findWidget(wgid);
        widget.url = '../uploads/'+filename;
        widget.width = width;
        widget.name = filename;
        widget.text = text;
        console.log(widgets);

        var callbackUrl   = "../assignment/#!/user/"+uid+"/website/"+wid+"/page/"+pid+"/widget/"+wgid;
        response.redirect(callbackUrl);


    }

