/**
 * Created by ani on 8/1/17.
 */
var app = require("../express");

// http handlers
app.post("/api/user/:uid/website", createWebsite);
app.get("/api/user/:uid/website", findAllWebsitesForUser);
app.get("/api/website/:websiteId", findWebsiteById);
app.put("/api/website/websiteId", updateWebsite);
app.delete("/api/website/websiteId", deleteWebsite);

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
    website._id = (new Date).getTime() + "";
    website.developerId = userId;
    websites.push(website);
}

function findAllWebsitesForUser(req, response) {
    var userSites = [];
    for(var w in websites){
        var currW = websites[w];
        if(currW.developerId == userId){
            userSites.push(currW);
        }
    }
    return userSites;
}

function findWebsiteById(req, response) {
    for(var w in websites){
        var currW = websites[w];
        if(currW._id == websiteId){
            return angular.copy(currW);
        }
    }
}

function updateWebsite(req, response) {
    for(var w in websites){
        var currW = websites[w];
        if(currW._id == websiteId){
            websites[w] = website;
            return;
        }
    }
}

function deleteWebsite(req, response) {
    for(var w in websites){
        var currW = websites[w];
        if(currW._id == websiteId){
            delete websites[w];
            return;
        }
    }
}

