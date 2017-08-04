/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];

        function init() {
            pageService.findPageByWebsiteId(vm.wid)
                .then(function(response) {
                    vm.pages = response;
                });
        }
        init();


    }

})();
