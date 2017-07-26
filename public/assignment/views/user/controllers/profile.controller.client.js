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

        }

        init();

        vm.user = userService.findUserById(vm.uid);

        function updateUsr(user) {
            userService.updateUser(vm.uid, user);
            $location.url("user/"+vm.uid);
            alert("User Updated!");
        }

        function deleteUsr(){
            userService.deleteUser(vm.uid);
            $location.url("login");
        }



    }

})();


