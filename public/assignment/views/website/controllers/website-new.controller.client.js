/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteNewController", websiteNewController);

    function websiteNewController($routeParams, $location, websiteService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.addSite = addSite;

        function init() {
            var sites = websiteService.findWebsitesByUser(vm.uid);
            vm.websites = sites;
        }
        init();

        function addSite(website) {
            websiteService.createWebsite(vm.uid, website);
            $location.url("user/"+vm.uid+'/website');
        }

    }

})();
