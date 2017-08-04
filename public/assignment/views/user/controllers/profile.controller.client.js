/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams, $location, userService) {
        var vm = this;
        vm.uid = $routeParams["uid"];
        vm.updateUsr = updateUsr;
        vm.deleteUsr = deleteUsr;

        function init() {
            userService.findUserById(vm.uid)
                .then(function (response) {
                vm.user = response;
            });
        }

        init();

        function updateUsr(user) {
            var promise = userService.updateUser(user);
            promise
                .then(function(response) {
                    var _user = response.data;
                    if (_user != "0"){
                        $location.url("user/"+vm.uid);
                        alert("User Updated!");
                        return;
                    }
                });
        }

        function deleteUsr(){
            var promise = userService.deleteUser(vm.uid);
            promise
                .then(function(response) {
                    var uid = response.data;
                    $location.url("login");
                    return;
                });
        }



    }

})();


