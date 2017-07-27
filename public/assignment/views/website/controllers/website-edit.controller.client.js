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
            vm.websites = websiteService.findWebsitesByUser(vm.uid);
            vm.website = websiteService.findWebsitesById(vm.wid);
        }
        init();

        function updateSite(site) {
            websiteService.updateWebsite(vm.wid, site);
            $location.url("user/"+vm.uid+'/website');
            alert("Site Updated!");
        }

        function deleteSite(){
            websiteService.deleteWebsite(vm.wid);
            $location.url("user/"+vm.uid+'/website');
        }


    }
})();
