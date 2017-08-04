/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteEditController", websiteEditController);

    function websiteEditController($routeParams, $location, websiteService) {
        var vm = this;
        vm.uid = $routeParams.uid;
        vm.wid = $routeParams.wid;
        vm.updateSite = updateSite;
        vm.deleteSite = deleteSite;

        function init() {
            websiteService.findWebsitesByUser(vm.uid)
                .then(function(response) {
                    vm.websites = response;
                });
            websiteService.findWebsitesById(vm.wid, vm.uid)
                .then(function(response) {
                    vm.website = response;
                });
        }
        init();

        function updateSite(site) {
            site._id = vm.wid;
            websiteService.updateWebsite(site)
                .then(function(response) {
                    var _site = response;
                    console.log("in web-edit");
                    console.log(_site);
                    $location.url("/user/"+vm.uid+'/website');
                    alert("Site Updated!");
                });
        }

        function deleteSite(){
            websiteService.deleteWebsite(vm.wid, vm.uid)
                .then(function(response) {
                    var _siteId = response.data;
                    $location.url("/user/"+vm.uid+'/website');
                });
        }


    }
})();
