/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);
    function pageService($http) {
        // var pages = [
        //         { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        //         { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        //         { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        //     ];
        // var pages = [
        //     { "_id": "321", "name": "Post 1", "websiteId": "567", "description": "Lorem" },
        //     { "_id": "432", "name": "Post 2", "websiteId": "567", "description": "Lorem" },
        //     { "_id": "543", "name": "Post 3", "websiteId": "567", "description": "Lorem" }
        // ];

        var api = {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };

        return api;

        function createPage(page, uid) {
            var url = "/api/website/"+page.websiteId+"/page";
            return $http.post(url, page)
                .then(function(response) {
                return response.data;
            });

            // var pageId = (new Date).getTime() + "";
            // page._id = pageId;
            // page.websiteId = websiteId;
            // pages.push(page);
            // return page;
        }

        function findPageByWebsiteId(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url, websiteId)
                .then(function(response) {
                return response.data;
            });

            // var pageList = [];
            // for(var p in pages){
            //     var currP = pages[p];
            //     if(currP.websiteId == websiteId){
            //         pageList.push(currP);
            //     }
            // }
            // return pageList;
        }

        function findPageById(pageId) {
            var url = "/api/page/"+pageId;
            return $http.get(url, pageId)
                .then(function(response) {
                    return response.data;
                });

            // for(var p in pages){
            //     var currP = pages[p];
            //     if(currP._id == pageId){
            //         return angular.copy(currP);
            //     }
            // }
        }

        function updatePage(page) {
            var url = "/api/page/"+page._id;
            return $http.put(url, page)
                .then(function(response) {
                    return response.data;
                });

            // for(var p in pages){
            //     var currP = pages[p];
            //     if(currP._id == pageId){
            //         pages[p] = page;
            //         return;
            //     }
            // }
        }

        function deletePage(pageId, websiteId) {
            var url = "/api/website/" + websiteId + "/page/"+pageId;
            return $http.delete(url);

            // for(var p in pages){
            //     var currP = pages[p];
            //     if(currP._id == pageId){
            //         delete pages[p];
            //         return;
            //     }
            // }
        }


    }
})();