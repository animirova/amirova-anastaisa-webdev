/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController", websiteListController);

    function websiteListController($routeParams, $location, websiteService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];

        function init() {
            websiteService.findWebsitesByUser(vm.uid)
                .then(function(response) {
                   vm.websites = response;
                });
        }
        init();




    }

})();
