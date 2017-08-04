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
            pageService.findPageByWebsiteId(vm.wid)
                .then(function(response) {
                    vm.pages = response;
                });
            // pageService.findPageById(vm.pid)
            //     .then(function(response) {
            //         vm.page = response;
            //     });
            // console.log(vm.page);
        }
        init();

        function addPage(page) {
            page.websiteId = vm.wid;
            console.log(page);
            pageService.createPage(page)
                .then(function(response) {
                    var _page = response.data;
                    $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page');
                });
        }

    }

})();
