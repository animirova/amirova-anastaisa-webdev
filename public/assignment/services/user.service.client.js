/**
 * Created by ani on 7/25/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);
    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };

        return api;

        function createUser(user) {
            var userId = (new Date).getTime() + "";
            user._id = userId;
            // var newUser = {_id: userId,
            //     username: user.username,
            //     password: user.password,
            //     firstName: "",
            //     lastName: ""};

            users.push(user);
            return user;
        }

        function findUserById(userId) {
            for(var u in users){
                var currU = users[u];
                if(currU._id == userId){
                    return currU;
                }
            }
        }

        function findUserByUsername(username) {
            for(var u in users){
                var currU = users[u];
                if(currU.username == username){
                    return currU;
                }
            }
        }

        function findUserByCredentials(username, password) {
            for(var u in users){
                var currU = users[u];
                if(currU.username == username &&
                   currU.password == password){
                    return currU;
                }
            }
        }

        function updateUser(userId, user) {
            for(var u in users){
                var currU = users[u];
                if(currU._id == userId){
                    users[u] = user;
                    return;
                }
            }
        }

        function deleteUser(userId) {
            for(var u in users){
                var currU = users[u];
                if(currU._id == userId){
                    delete users[u];
                    return;
                }
            }

        }
    }
})();