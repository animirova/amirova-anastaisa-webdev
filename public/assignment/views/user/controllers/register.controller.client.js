/**
 * Created by ani on 7/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController);

    function registerController($location, userService) {
        var vm = this;
        vm.addUser = addUser;

        function init() {

        }
        init();

        function addUser(user) {
            var newUser = userService.createUser(user);
            $location.url("user/"+newUser._id);

        }


    }
})();