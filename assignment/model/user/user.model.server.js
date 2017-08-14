/**
 * Created by ani on 8/11/17.
 */

var mongoose = require('mongoose');
var db = require ('../models.server.js');
var userSchema = require('./user.schema.server.js');
var userModel = mongoose.model("userModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

userModel.deleteSite = deleteSite;
userModel.newSite = newSite;

module.exports = userModel;

function deleteSite(uid, wid) {
    return userModel.findById(uid)
        .then(function (r) {
            var idx = r.websites.indexOf(wid);
            r.websites.splice(idx, 1);
            r.save();
            return;
        });
}

function newSite(uid, websiteId) {
    return userModel.findUserById(uid)
        .then(function (r) {
            r.websites.push(websiteId);
            r.save();
            return
        })
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username : username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username : username, password : password});
}

function updateUser(user) {
    return userModel.update({_id : user._id}, {$set : user});
}

function deleteUser(userId) {
    return userModel.remove({_id : userId});
}
