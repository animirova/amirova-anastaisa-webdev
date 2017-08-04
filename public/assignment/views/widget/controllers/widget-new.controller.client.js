/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($routeParams, widgetService, $location) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];
        vm.addWidget = addWidget;


        function init() {
            var promise = widgetService.findWidgetsByPageId(vm.pid);
            promise
                .then(function(response) {
                    vm.widgets = response.data;
                });
        }
        init();

        function addWidget(type) {
            var tempWg = {"pageId": vm.pid, "widgetType": type};
            widgetService.createWidget(tempWg)
                .then(function (_newWg) {
                    vm.widget = _newWg;
                    vm.wgid = _newWg._id;
                    $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page/'+vm.pid+'/widget/'+vm.wgid);
                });
        }

    }

})();
