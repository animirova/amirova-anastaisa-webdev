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
            var promise = userService.findUserByUsername(user.username);
            promise
                .then(function (response) {
                    var _user = response.data;
                    if(_user === "0") {
                        _user = userService.createUser(user);
                        $location.url("/profile/" + user._id);
                    } else {
                        vm.error = "User Already Exists!";
                    }
                });
        }


    }
})();