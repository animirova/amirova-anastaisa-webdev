/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageNewController", pageNewController);

    function pageNewController($routeParams, $location, pageService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.addPage = addPage;

        function init() {
            vm.pages = pageService.findPageByWebsiteId(vm.wid);
            vm.page = pageService.findPageById(vm.pid);
        }
        init();

        function addPage(page) {
            page.websiteId = vm.wid;
            pageService.createPage(page);
            $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page');
        }

    }

})();
