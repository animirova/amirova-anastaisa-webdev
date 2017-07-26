/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($routeParams, widgetService) {
        var vm = this;
        vm.uid = $routeParams.uid;


        function init() {

        }
        init();



    }

})();
