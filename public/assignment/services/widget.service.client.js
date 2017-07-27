/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService", widgetService);
    function widgetService() {
        var widgets = [
                { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
                { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                    "url": "http://lorempixel.com/400/200/"},
                { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://www.youtube.com/embed/ycdcDFuGarM" },

                        // "https://youtu.be/AM2Ivdi9c4E" },
                { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
            ];


        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };

        return api;

        function createWidget(widget) {
            var pageId = widget.pageId;
            var wgId = (new Date).getTime() + "";
            widget._id = wgId;
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;
        }

        function findWidgetsByPageId(pageId) {
            var widgetList = [];
            for(var w in widgets){
                var currW = widgets[w];
                if(currW.pageId == pageId){
                    widgetList.push(currW);
                }
            }
            return widgetList;
        }

        function findWidgetById(widgetId) {
            for(var w in widgets){
                var currW = widgets[w];
                if(currW._id == widgetId){
                    return currW;
                }
            }
        }

        function updateWidget(widgetId, widget) {
            for(var w in widgets){
                var currW = widgets[w];
                if(currW._id == widgetId){
                    widgets[w] = widget;
                    console.log(widget)
                    return;
                }
            }
        }

        function deleteWidget(widgetId) {
            for(var w in widgets){
                var currW = widgets[w];
                if(currW._id == widgetId){
                    delete widgets[w];
                    console.log(widgets)
                    return;
                }
            }
        }
    }
})();