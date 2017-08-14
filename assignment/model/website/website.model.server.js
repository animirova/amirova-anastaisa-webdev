    /**
     * Created by ani on 8/11/17.
     */
    var mongoose = require('mongoose');
    var db = require ('../models.server.js');
    var websiteSchema = require('./website.schema.server.js');
    var userModel = require('../user/user.model.server.js');
    var websiteModel = mongoose.model("websiteModel", websiteSchema);


    websiteModel.findWebsitesByUser = findWebsitesByUser;
    websiteModel.createWebsite = createWebsite;
    websiteModel.findWebsiteById = findWebsiteById;
    websiteModel.updateWebsite = updateWebsite;
    websiteModel.deleteWebsite = deleteWebsite;

    websiteModel.newPage = newPage;
    websiteModel.deletePage = deletePage;

    module.exports = websiteModel;

    function newPage(pid, wid) {
        return websiteModel.findById(wid)
            .then(function (r) {
                r.pages.push(pid);
                r.save();
                return;
            });
    }

    function deletePage(pid, wid) {
        return websiteModel.findById(wid)
            .then(function (r) {
                var idx = r.pages.indexOf(pid);
                r.pages.splice(idx, 1);
                r.save();
                return;
            });
    }

    function createWebsite(website, userId) {
        website.user = userId;
        var tempSite = null;

        return websiteModel.create(website)
            .then(function (site) {
                tempSite = site;
                userModel.newSite(userId, site._id);

            }).then(function (res) {
                return tempSite;
            });
    }

    function findWebsitesByUser(userId) {
        return websiteModel.find({ user : userId });
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

    function findWebsiteById(webId) {
        return websiteModel.findById(webId);
        // var websiteId = req.params.websiteId;
        // for(var w in websites){
        //     var currW = websites[w];
        //     if(currW._id === websiteId){
        //         response.json(websites[w]);
        //         return websites[w];
        //     }
        // }
    }

    function updateWebsite(website) {
        var webId = website._id;
        return websiteModel.update({ _id : webId}, { $set : website });

        // var website = req.body;
        // console.log(website);
        // var websiteId = req.params.websiteId;
        // for(var w in websites){
        //     var currW = websites[w];
        //     if(currW._id === websiteId){
        //         //    websites[w].name = website.name;
        //         //      websites[w].description = website.description;
        //         websites[w] = website;
        //         response.json(websites[w]);
        //         return;
        //     }
        // }
        // response.error(404);
        // return;
    }

    function deleteWebsite(webId, userId) {

        return websiteModel.remove({ _id : webId })
            .then(function (res) {
                return userModel.deleteSite(userId, webId);
            })

        // var siteId = req.params.websiteId;
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