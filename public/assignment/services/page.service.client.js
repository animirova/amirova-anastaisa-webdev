/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);
    function pageService() {
        // var pages = [
        //         { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        //         { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        //         { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        //     ];
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "567", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "567", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "567", "description": "Lorem" }
        ];

        var api = {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };

        return api;

        function createPage(websiteId, page) {
            var pageId = (new Date).getTime() + "";
            page._id = pageId;
            page.websiteId = websiteId;
            pages.push(page);
            return page;
        }

        function findPageByWebsiteId(websiteId) {
            var pageList = [];
            for(var p in pages){
                var currP = pages[p];
                if(currP.websiteId == websiteId){
                    pageList.push(currP);
                }
            }
            return pageList;
        }

        function findPageById(pageId) {
            for(var p in pages){
                var currP = pages[p];
                if(currP._id == pageId){
                    return angular.copy(currP);
                }
            }
        }

        function updatePage(pageId, page) {
            for(var p in pages){
                var currP = pages[p];
                if(currP._id == pageId){
                    pages[p] = page;
                    return;
                }
            }
        }

        function deletePage(pageId) {
            for(var p in pages){
                var currP = pages[p];
                if(currP._id == pageId){
                    delete pages[p];
                    return;
                }
            }
        }
    }
})();