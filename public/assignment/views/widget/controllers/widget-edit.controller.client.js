/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetEditController", widgetEditController);

    function widgetEditController($routeParams, $location, widgetService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];
        vm.wgid = $routeParams["wgid"];
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        function init() {
            vm.widgets = widgetService.findWidgetsByPageId(vm.pid);
            vm.widget = widgetService.findWidgetById(vm.wgid);
        }
        init();

        function updateWidget(widget) {
            widgetService.updateWidget(vm.wgid, widget);
            $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page/'+vm.pid+'/widget');
            alert("Widget Updated!");
        }

        function deleteWidget(){
            widgetService.deleteWidget(vm.wgid);
            $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page/'+vm.pid+'/widget');
        }



    }

})();
