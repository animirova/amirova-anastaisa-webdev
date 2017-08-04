/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageEditController", pageEditController);

    function pageEditController($routeParams, pageService, $location) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            pageService.findPageByWebsiteId(vm.wid)
                .then(function(response) {
                    vm.pages = response;
                });
            pageService.findPageById(vm.pid)
                .then(function(response) {
                    vm.page = response;
                });
        }
        init();

        function updatePage(page) {
            pageService.updatePage(page)
                .then(function(response) {
                    var _page = response;
                    $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page');
                });
        }

        function deletePage(){
            pageService.deletePage(vm.page)
                .then(function(response) {
                   var pid = response;
                   $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page');
                });
        }

    }

})();
