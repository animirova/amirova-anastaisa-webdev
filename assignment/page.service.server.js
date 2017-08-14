/**
 * Created by ani on 8/1/17.
 */
var app = require("../express");
var pageModel = require("./model/page/page.model.server.js");

// http handlers
app.post("/api/website/:websiteId/page", createPage);
app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/website/:websiteId/page/:pageId", deletePage);

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "567", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "567", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "567", "description": "Lorem" }
];

function createPage(req, response) {
    var websiteId = req.params.websiteId;
    var page = req.body;
    page._website = websiteId;

    pageModel.createPage(page)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(500).send(error);
            return;
        });
    // page.websiteId = websiteId;
    // page._id = (new Date).getTime() + "";
    // pages.push(page);
    // response.json(page);
    // return page;
}

function findAllPagesForWebsite(req, response) {
    var websiteId = req.params.websiteId;

    pageModel.findAllPagesForWebsite(websiteId)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(500).send(error);
            return;
        });
    // var pageList = [];
    // for(var p in pages){
    //     var currP = pages[p];
    //     if(currP.websiteId === websiteId){
    //         pageList.push(pages[p]);
    //     }
    // }
    // response.send(pageList);
    // return pageList;
}

function findPageById(req, response) {
    var pageId = req.params.pageId;

    pageModel.findPageById(pageId)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(404).send(error);
            return;
        });
    // for(var p in pages){
    //     var currP = pages[p];
    //     if(currP._id === pageId){
    //         response.send(pages[p]);
    //         return pages[p];
    //     }
    // }
    // response.send("0")
}

function updatePage(req, response) {
    var page = req.body;
    var pageId = req.params.pageId;
    page._id = pageId;

    pageModel.updatePage(page)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(500).send(error);
            return;
        });
    // for(var p in pages){
    //     var currP = pages[p];
    //     if(currP._id === pageId){
    //         pages[p] = page;
    //         response.json(page);
    //         return page;
    //     }
    // }
}

function deletePage(req, response) {
    var pageId = req.params.pageId;
    var websiteId = req.params.websiteId;

    pageModel.deletePage(pageId, websiteId)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(500).send(error);
            return;
        });
    // for(var p in pages){
    //     if(pages[p]._id === pageId){
    //         delete pages[p];
    //         response.sendStatus(200);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}