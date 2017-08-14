/**
 * Created by ani on 8/1/17.
 */
var app = require("../express");
var websiteModel = require("./model/website/website.model.server.js");

// http handlers
app.post("/api/user/:uid/website", createWebsite);
app.get("/api/user/:uid/website", findAllWebsitesForUser);
app.get("/api/website/:websiteId", findWebsiteById);
app.put("/api/website/:websiteId", updateWebsite);
app.delete("/api/user/:uid/website/:websiteId", deleteWebsite);

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];


function createWebsite(req, response) {
    var website = req.body;
    var uid = req.params.uid;
    website.developerId = uid;

    websiteModel.createWebsite(website, uid)
        .then(function (r) {
            response.json(r);
            return;
        }, function (error) {
            response.sendStatus(500).send(error);
        });
    // website._id = (new Date).getTime() + "";
    // websites.push(website);
    // response.json(website);
    // return website;
}

function findAllWebsitesForUser(req, response) {
    var userId = req.params.uid;

    websiteModel.findWebsitesByUser(userId)
        .then(function (r) {
            response.json(r);
            return;
        }, function (error) {
            response.sendStatus(404).send(error);
            return;
        });
    // var userSites = [];
    // for(var w in websites){
    //     var currW = websites[w];
    //     if(currW.developerId === userId){
    //         userSites.push(currW);
    //     }
    // }
    // response.json(userSites);
    // return userSites;
}

function findWebsiteById(req, response) {
    var websiteId = req.params.websiteId;
    console.log(websiteId);
    websiteModel.findWebsiteById(websiteId)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(404).send(error);
            return;
        });
    // for(var w in websites){
    //     var currW = websites[w];
    //     if(currW._id === websiteId){
    //         response.json(websites[w]);
    //         return websites[w];
    //     }
    // }
}

function updateWebsite(req, response) {
    var website = req.body;

    websiteModel.updateWebsite(website)
        .then(function (r) {
            response.json(r);
            return
        }, function (error) {
            response.sendStatus(500).send(error);
            return;
        });
    // for(var w in websites){
    //     var currW = websites[w];
    //     if(currW._id === websiteId){
    //     //    websites[w].name = website.name;
    //   //      websites[w].description = website.description;
    //         websites[w] = website;
    //         response.json(websites[w]);
    //         return;
    //     }
    // }
    // response.error(404);
    // return;
}

function deleteWebsite(req, response) {
    var siteId = req.params.websiteId;
    var uid = req.params.uid;

    websiteModel.deleteWebsite(siteId, uid)
        .then(function (r) {
            response.json(r);
            return;
        }, function (error) {
            response.sendStatus(500).send(error);
        });
    // console.log(siteId);
    // for(var w in websites){
    //     var currW = websites[w];
    //     if(currW._id === siteId){
    //         delete websites[w];
    //         response.sendStatus(200);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}

