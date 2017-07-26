/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("websiteService", websiteService);
    function websiteService() {
        var websites = [
                { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
                { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];

        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsitesById": findWebsitesById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };

        return api;

        function createWebsite(userId, website) {
            var webId = (new Date).getTime() + "";
            website._id = webId;
            website.developerId = userId;
            websites.push(website);
        }

        function findWebsitesByUser(userId) {
            var userSites = [];
            for(var w in websites){
                var currW = websites[w];
                if(currW.developerId == userId){
                    userSites.push(currW);
                }
            }
            return userSites;
        }

        function findWebsitesById(websiteId) {
            for(var w in websites){
                var currW = websites[w];
                if(currW._id == websiteId){
                    return angular.copy(currW);
                }
            }
        }

        function updateWebsite(websiteId, website) {
            for(var w in websites){
                var currW = websites[w];
                if(currW._id == websiteId){
                    websites[w] = website;
                    return;
                }
            }
        }

        function deleteWebsite(websiteId) {
            for(var w in websites){
                var currW = websites[w];
                if(currW._id == websiteId){
                    delete websites[w];
                    return;
                }
            }
        }
    }
})();