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
            userService.findUserByCredentials(user.username)
                .then(function (_user) {
                    if(_user === "0") {
                        console.log(user);
                        console.log("in register controller");
                        return userService.createUser(user);
                    } else {
                        vm.error = "User Already Exists!";
                    }
                }).then(function (user) {
                    console.log(user._id);
                    $location.url("/user/" + user._id);
            });
        }


    }
})();