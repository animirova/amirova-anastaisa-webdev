/**
 * Created by ani on 8/09/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("widgetFlickrController", widgetFlickrController);

    function widgetFlickrController($routeParams, widgetService, $location, flickrService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.wid = $routeParams["wid"];
        vm.pid = $routeParams["pid"];
        vm.wgid = $routeParams["wgid"];
        vm.searchPhotos = searchPhotos;
        vm.selectPhoto = selectPhoto;


        function init() {

        }

        init();

        function searchPhotos(searchTerm) {
            flickrService
                .searchPhotos(searchTerm)
                .then(function (response) {
                    var data = response.data.replace("jsonFlickrApi(", "");
                    data = data.substring(0, data.length - 1);
                    data = JSON.parse(data);
                    console.log(data.photos);
                    console.log(data.photos.server);
                    vm.photos = data.photos;
                });
        }


        function selectPhoto(photo) {
            flickrService
                .selectPhoto(vm.wgid, photo)
                .then(function (status) {
                    var url = "user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget";
                    $location.url(url);
                });
        }
    }
})();
