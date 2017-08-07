/**
 * Created by ani on 8/3/17.
 */
(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("wbdvSortable", wbdvSortableDirective);


    function wbdvSortableDirective($http) {
        function widgetList(scope, element) {
            console.log(element);
            var widgetList = element.find("#widgetList");
            widgetList.sortable({
                start: function (event, ui) {
                    console.log(widgetList);
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
            templateUrl: "views/widget/templates/widget-list.component.client.html",
            link: widgetList
        }

    }

})();