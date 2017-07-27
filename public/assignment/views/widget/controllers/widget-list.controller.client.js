/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController", widgetListController);

    function widgetListController($routeParams, widgetService, $sce) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];
        vm.trustUrl = trustUrl;
        // vm.wgid = $routeParams["wgid"];

        function init() {
            vm.widgets = widgetService.findWidgetsByPageId(vm.pid);
            // vm.widget = widgetService.findWidgetById(vm.wgid);
        }
        init();

        function trustUrl(url) {
            return $sce.trustAsResourceUrl(url);
        }


    }

})();
