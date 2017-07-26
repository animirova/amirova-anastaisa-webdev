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

        }
        init();

        function updatePage(page) {
            pageService.updatePage(vm.pid, page);
            $location.url("user/"+vm.uid+'/website'+vm.wid);
            alert("Site Updated!");
        }

        function deletePage(){
            pageService.deletePage(vm.pid);
            $location.url("user/"+vm.uid+'/website'+vm.wid);
        }



    }

})();
