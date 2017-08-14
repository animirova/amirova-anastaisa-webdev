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
            widgetService.findWidgetById(vm.wgid)
                .then(function(response) {
                    console.log(vm.widget);
                    vm.widget = response;
                });
        }
        init();

        function updateWidget(widget) {
            widget._id = vm.wgid;
            var promise = widgetService.updateWidget(widget);
            promise
                .then(function(response){
                    var widget = response.data;
                    $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page/'+vm.pid+'/widget');
                });
        }

        function deleteWidget(){
            var promise = widgetService.deleteWidget(vm.wgid, vm.pid);
            promise
                .then(function(response) {
                    var widget = response.data;
                    $location.url("user/"+vm.uid+'/website/'+vm.wid+'/page/'+vm.pid+'/widget');
                });
        }

    }

})();
