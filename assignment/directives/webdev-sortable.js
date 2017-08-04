/**
 * Created by ani on 8/3/17.
 */
(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("wbdv-sortable", wbdvSortableDirective);

    function wbdvSortableDirective($http) {
        function widgetList(scope, element) {
            var widgetList = element.find("#widgetList");
            widgetList.sortable({
                start: function (event, ui) {
                    startIdx = $(ui.item).index();
                },
                stop: function (event, ui) {
                    endIdx = $(ui.item).index();
                    scope.vm.moveWidget(startIdx, endIdx);
                }
            });
            var startIdx = -1;
            var endIdx = -1;
        }
        return {
            templateUrl: "../../public/assignment/views/widget/templates/widget-list-view-client.html",
            link: widgetList
        }

    }

})();