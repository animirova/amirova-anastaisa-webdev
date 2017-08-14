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
        vm.trustHtml = trustHtml;
        vm.moveWidget = moveWidget;
        // vm.wgid = $routeParams["wgid"];

        function init() {
            widgetService.findWidgetsByPageId(vm.pid)
                .then(function(response) {
                    vm.widgets = response;
                });
            // vm.widget = widgetService.findWidgetById(vm.wgid);
        }
        init();

        function trustUrl(url) {
            var url = url.replace("watch?v=", "v/");
            return $sce.trustAsResourceUrl(url);
        }

        function moveWidget(startIdx, endIdx) {
            widgetService.moveWidget(vm.wid, vm.pid, startIdx, endIdx)
                .then(function (response) {
                    return response;
                });
        }

        function trustHtml(text) {
            return $sce.trustAsHtml(text);
        }


    }

})();
