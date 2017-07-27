/**
 * Created by ani on 7/25/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);

    function loginController($location, userService) {
        var vm = this;
        vm.login = login;

        function init() {

        }
        init();

        function login(user){
            var currUsr = userService.findUserByCredentials(user.username, user.password);
            if(!currUsr){
                vm.errorMessage = "User not found!";
            } else {
                console.log(currUsr._id)
                $location.url("user/"+currUsr._id);
            }
        }
    }

})();


