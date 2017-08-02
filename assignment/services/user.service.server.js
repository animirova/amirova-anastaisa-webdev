/**
 * Created by ani on 8/1/17.
 */
var app = require("../express");

// http handlers
app.get("/api/users", getAllUsers);
app.post("/api/user", createUser);
app.get("/api/user?username=username", findUserByUsername);
app.get("/api/user?username=username&password=password", findUserByCredentials);
app.get("/api/user/:uid", findUserById);
app.put("/api/user/:uid", updateUser);
app.delete("/api/user/:uid", deleteUser);

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

function getAllUsers(req, response) {
    response.send(users);
}

function createUser(req, response) {
    var newUser = req.body;
    newUser._id = (new Date).getTime() + "";
    users.push(newUser);
    response.send(newUser);
    return;
}

function findUserByUsername(req, response) {
    for(var u in users){
        var currU = users[u];
        if(currU.username == req.query.username){
            response.send(currU);
            return;
        }
    }
    response.send("0");
}

function findUserById(req, response) {
    for(var u in users) {
        if(users[u]._id === req.params.uid) {
            response.send(users[u]);
            return;
        }
    }
    response.send("0");
}

function findUserByCredentials(req, response) {
    var username = req.query.username;
    var password = req.query.password;
    for(var u in users) {
        var currU = users[u];
        if(currU.username == username &&
            currU.password == password){
            response.send(currU);
            return;
        }
    }
    response.send("0");
}

function updateUser(req, response) {
    var user = req.body;
    for(var u in users){
        var currU = users[u];
        if(currU._id == user._id){
            users[u] = user;
            response.send(user);
            return;
        }
    }
    response.send("0");
}


function deleteUser(req, response) {
    var user = req.body;
    for(var u in users){
        var currU = users[u];
        if(currU._id == user._id){
            delete users[u];
            response.send(user);
            return;
        }
    }
    response.send("0");
}
