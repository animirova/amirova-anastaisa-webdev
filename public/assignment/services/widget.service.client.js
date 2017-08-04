/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService", widgetService);
    function widgetService($http) {
        // var widgets = [
        //         { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
        //         { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        //         { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        //             "url": "http://lorempixel.com/400/200/"},
        //         { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        //         { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        //         { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        //             "url": "https://www.youtube.com/embed/ycdcDFuGarM" },
        //
        //                 // "https://youtu.be/AM2Ivdi9c4E" },
        //         { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        //     ];


        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "modeWidget" : moveWidget
        };

        return api;

        function createWidget(widget) {
            var url = "/api/page/"+widget.pageId+"/widget";

            return $http.post(url, widget)
                .then(function(response) {
                    return response.data;
                });

            // var pageId = widget.pageId;
            // var wgId = (new Date).getTime() + "";
            // widget._id = wgId;
            // widget.pageId = pageId;
            // widgets.push(widget);
            // return widget;
        }

        function findWidgetsByPageId(pageId) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.get(url, pageId)
                .then(function(response) {
                    return response.data;
                });

            // var widgetList = [];
            // for(var w in widgets){
            //     var currW = widgets[w];
            //     if(currW.pageId == pageId){
            //         widgetList.push(currW);
            //     }
            // }
            // return widgetList;
        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.get(url, widgetId)
                .then(function(response) {
                    return response.data;
                });

            // for(var w in widgets){
            //     var currW = widgets[w];
            //     if(currW._id == widgetId){
            //         return currW;
            //     }
            // }
        }

        function updateWidget(widget) {
            var url = "/api/widget/"+widget._id;
            return $http.put(url, widget)
                .then(function(response) {
                    return response.data;
                });

            // for(var w in widgets){
            //     var currW = widgets[w];
            //     if(currW._id == widgetId){
            //         widgets[w] = widget;
            //         console.log(widget)
            //         return;
            //     }
            // }
        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.delete(url, widgetId);

            // for(var w in widgets){
            //     var currW = widgets[w];
            //     if(currW._id == widgetId){
            //         delete widgets[w];
            //         console.log(widgets)
            //         return;
            //     }
            // }
        }

        function moveWidget(widgetId, pageId, startIdx, endIdx) {
            var url = "/api/page/"+pageId+"/widget?startIdx="+startIdx+"&endIdx="+endIdx;
            return $http.put(url, widgetId);

        }

    }
})();