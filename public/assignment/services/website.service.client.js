/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("websiteService", websiteService);
    function websiteService($http) {
        // var websites = [
        //         { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        //         { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        //         { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        //         { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
        //         { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        //         { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        //         { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        //     ];

        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsitesById": findWebsitesById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };

        return api;

        function createWebsite(website) {
            var url = "/api/user/"+website.developerId+"/website";
            return $http.post(url, website)
                .then(function(response) {
                return response.data;
            });

            // var webId = (new Date).getTime() + "";
            // website._id = webId;
            // website.developerId = userId;
            // websites.push(website);
        }

        function findWebsitesByUser(userId) {
            var url = "/api/user/"+userId+"/website";
            return $http.get(url, userId)
                .then(function(response) {
                    return response.data;
                });

            // var userSites = [];
            // for(var w in websites){
            //     var currW = websites[w];
            //     if(currW.developerId == userId){
            //         userSites.push(currW);
            //     }
            // }
            // return userSites;
        }

        function findWebsitesById(websiteId, devId) {
            var url = "/api/website/"+websiteId;
            return $http.get(url, websiteId)
                .then(function(response) {
                    return response.data;
                });

            // for(var w in websites){
            //     var currW = websites[w];
            //     if(currW._id == websiteId){
            //         return angular.copy(currW);
            //     }
            // }
        }

        function updateWebsite(website) {
            var url = "/api/website/"+website._id;
            return $http.put(url, website);

            // for(var w in websites){
            //     var currW = websites[w];
            //     if(currW._id == websiteId){
            //         websites[w] = website;
            //         return;
            //     }
            // }
        }

        function deleteWebsite(websiteId, uid) {
            var url = "/api/user/" + uid + "/website/"+websiteId;
            return $http.delete(url);

            // for(var w in websites){
            //     var currW = websites[w];
            //     if(currW._id == websiteId){
            //         delete websites[w];
            //         return;
            //     }
            // }
        }


    }
})();