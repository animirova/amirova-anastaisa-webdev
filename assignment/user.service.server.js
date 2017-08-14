/**
 * Created by ani on 8/1/17.
 */
var app = require("../express");
var userModel = require("./model/user/user.model.server.js");

// http handlers
app.post("/api/user", createUser);
//app.get("/api/user?username=username", findUserByUsername);
app.get("/api/user", findUserByCredentials);
app.get("/api/user/:uid", findUserById);
app.put("/api/user/:uid", updateUser);
app.delete("/api/user/:uid", deleteUser);

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

function createUser(req, response) {
    var newUser = req.body;

    userModel.createUser(newUser)
        .then(function (usr) {
            response.json(usr);
            return;
        })
    // console.log(newUser);
    // newUser._id = (new Date).getTime() + "";
    // users.push(newUser);
    // response.send(newUser);
    // return newUser;
}

// function findUserByUsername(req, response) {
//     for(var u in users){
//         var currU = users[u];
//         if(currU.username === req.query.username){
//             response.send(currU);
//             return;
//         }
//     }
//     response.send("0");
// }

function findUserById(req, response) {
    userModel.findUserById(req.params.uid)
        .then(function (user) {
            response.json(user);
            return;
        }, function (error) {
            response.sendStatus(404).send(error);
            return;
        });
    // for(var u in users) {
    //     if(users[u]._id === req.params.uid) {
    //         response.send(users[u]);
    //         return users[u];
    //     }
    // }
}

function findUserByCredentials(req, response) {
    var username = req.query.username;
    var password = req.query.password;
    if (username && password) {
        userModel.findUserByCredentials(username,password)
            .then(function (user) {
                if (user != null) {
                    response.json(user);
                } else {
                    response.send("0");
                }
                return
            }, function (error) {
                response.send("0");
                return;
            });
        // for (var u in users) {
        //     var currU = users[u];
        //     if (currU.username === username &&
        //         currU.password === password) {
        //         response.send(currU);
        //         return users[u];
        //     }
        // }
    } else if (username) {
        userModel.findUserByUsername(username)
            .then(function (user) {
                response.json(user);
                return;
            }, function (error) {
                response.send("0");
                return;
            });
        // for (var u in users) {
        //     if(users[u].username === username &&
        //             users[u].password === password) {
        //         response.send(users[u]);
        //         return users[u];
        //     }
        // }
    }
}

function deleteUser(req, response) {
    var userId = req.params.uid;

    userModel
        .deleteUser(userId)
        .then(function (r) {
             response.json(r);
             return;
        }, function (error) {
        response.sendStatus(500).send(error);
        return;
    });
}


function updateUser(req, response) {
    var user = req.body;

    userModel.updateUser(user)
        .then(function (r) {
            return response.json(r);
        }, function (error) {
            return response.sendStatus(500).send(error);
        });

    // for(var u in users){
    //     var currU = users[u];
    //     if(currU._id == user._id){
    //         users[u] = user;
    //         response.send(user);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}
