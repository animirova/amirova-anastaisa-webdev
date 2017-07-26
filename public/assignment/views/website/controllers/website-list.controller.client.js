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
            vm.websites = websiteService.findWebsitesByUser(vm.uid);
        }
        init();




    }

})();
