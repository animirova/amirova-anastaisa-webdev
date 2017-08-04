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
            websiteService.findWebsitesByUser(vm.uid)
                .then(function(response) {
                    vm.websites = response;
                });
        }
        init();

        function addSite(website) {
            website.developerId = vm.uid;
            var promise = websiteService.createWebsite(website);
            promise
                .then(function(response) {
                    var _website = response.data;
                    $location.url("user/"+vm.uid+'/website');

                });
        }

    }

})();
