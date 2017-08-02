/**
 * Created by ani on 7/25/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "vm"
            })
            .when("/", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "homeController",
                controllerAs: "vm"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "vm"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website", {
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/templates/website-new.view.client.html",
                controller: "websiteNewController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "websiteEditController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid/page", {
                templateUrl: "views/page/templates/page-list.view.client.html",
                controller: "pageListController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "views/page/templates/page-new.view.client.html",
                controller: "pageNewController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "views/page/templates/page-edit.view.client.html",
                controller: "pageEditController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "views/widget/templates/widget-choose.view.client.html",
                controller: "widgetNewController",
                controllerAs: "vm"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "widgetEditController",
                controllerAs: "vm"
            })
            // .when("/user/:uid/website/:wid/page/:pid/widget/heading/:wgid", {
            //     templateUrl: "views/widget/templates/widget-heading.view.client.html",
            //     controller: "widgetEditController",
            //     controllerAs: "vm"
            // })
            // .when("/user/:uid/website/:wid/page/:pid/widget/image/:wgid", {
            //     templateUrl: "views/widget/templates/widget-image.view.client.html",
            //     controller: "widgetEditController",
            //     controllerAs: "vm"
            // })
            // .when("/user/:uid/website/:wid/page/:pid/widget/youtube/:wgid", {
            //     templateUrl: "views/widget/templates/widget-youtube.view.client.html",
            //     controller: "widgetEditController",
            //     controllerAs: "vm"
            // })
            // .when("/user/:uid/website/:wid/page/:pid/widget/youtube/new", {
            //     templateUrl: "views/widget/templates/widget-youtube.view.client.html",
            //     controller: "widgetNewController",
            //     controllerAs: "vm"
            // })
            // .when("/user/:uid/website/:wid/page/:pid/widget/image/new", {
            //     templateUrl: "views/widget/templates/widget-image.view.client.html",
            //     controller: "widgetNewController",
            //     controllerAs: "vm"
            // })
            // .when("/user/:uid/website/:wid/page/:pid/widget/heading/new", {
            //     templateUrl: "views/widget/templates/widget-heading.view.client.html",
            //     controller: "widgetNewController",
            //     controllerAs: "vm"
            // })

            .otherwise({redirectTo : '/login'});

    }
})();
