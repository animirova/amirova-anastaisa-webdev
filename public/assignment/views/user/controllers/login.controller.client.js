/**
 * Created by ani on 7/25/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);

    function loginController($location, userService, $rootScope) {
        var vm = this;
        vm.login = login;

        function init() {

        }
        init();

        function login(user){
            //var currUsr = userService.findUserByCredentials(user.username, user.password);
            var promise = userService.findUserByCredentials(user.username, user.password);
            promise
                .then(function(response) {
                    _user = response.data;
                    if(_user === "0"){
                        vm.errorMessage = "User not found!";
                    } else {
                        $rootScope.currentUser = user;
                        console.log(currUsr._id);
                        $location.url("user/"+currUsr._id);
                    }
                });
        }


    }

})();


