/**
 * Created by ani on 8/1/17.
 */
var app = require("../express");

// http handlers
app.post("/api/website/:websiteId/page", createPage);
app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "567", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "567", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "567", "description": "Lorem" }
];

function createPage(req, response) {
    var page = req.body;
    page._id = (new Date).getTime() + "";
    pages.push(page);
    response.send(page);
    return;
}

function findAllPagesForWebsite(req, response) {
    var websiteId = req.body;
    var pageList = [];
    for(var p in pages){
        var currP = pages[p];
        if(currP.websiteId == websiteId){
            pageList.push(currP);
        }
    }
    response.send(pageList);
    return;
}

function findPageById(req, response) {
    var pageId = req.body;
    for(var p in pages){
        var currP = pages[p];
        if(currP._id == pageId){
            response.send(angular.copy(currP));
            return;
        }
    }
    response.send("0")
}

function updatePage(req, response) {
    var page = req.body;
    for(var p in pages){
        var currP = pages[p];
        if(currP._id == page._id){
            pages[p] = page;
            response.send(page);
            return;
        }
    }
}

function deletePage(req, response) {
    var pageId = req.body;
    for(var p in pages){
        var currP = pages[p];
        if(currP._id == pageId){
            delete pages[p];
            response.send(pageId);
            return;
        }
    }
}