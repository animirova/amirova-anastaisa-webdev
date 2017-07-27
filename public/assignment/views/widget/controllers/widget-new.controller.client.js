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
            vm.widgets = widgetService.findWidgetsByPageId(vm.pid);
        }
        init();

        function addWidget(type) {
            var tempWg = { "pageId": vm.pid, "widgetType" : type };
            var newWg = widgetService.createWidget(tempWg);
            vm.wgid = newWg._id;
            vm.widget = newWg;
            console.log(newWg);
            $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page/'+vm.pid+'/widget/'+vm.wgid);
        }

    }

})();
