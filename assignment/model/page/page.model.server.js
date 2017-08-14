/**
 * Created by ani on 8/11/17.
 */
var mongoose = require('mongoose');
var db = require ('../models.server.js');
var websiteModel = require('../website/website.model.server.js');

var pageSchema = require('./page.schema.server.js');
var pageModel = mongoose.model("pageModel", pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

pageModel.newWidget = newWidget;
pageModel.deleteWidget = deleteWidget;
pageModel.moveWidget = moveWidget;
pageModel.pageWidgets = pageWidgets;

module.exports = pageModel;

function newWidget(wgid, pid) {
    return pageModel
            .findById(pid)
            .then(function (r) {
                 r.widgets.push(wgid);
                 return r.save();
             });
}

function deleteWidget(wgid, pid) {
    return pageModel.findPageById(pid)
        .then(function (r) {
            var idx = r.widgets.indexOf(wgid);
            r.widgets.splice(idx, 1);
            return r.save();
        });
}

function moveWidget(sIdx, eIdx, pid) {
    return pageModel.findById(pid)
        .then(function (r) {
            var tempWg = r.widgets[sIdx];
            r.widgets[sIdx] = r.widgets[eIdx];
            r.widgets[eIdx] = tempWg;
            r.widgets.splice(0,0);
            return r.save();
        })
}

function pageWidgets(pid) {
    return pageModel.find({ _id : pid }).populate('widgets').exec();
}

function createPage(page) {
    var wid = page._website;
    var pageTemp = null;
    return pageModel.create(page)
        .then(function (r) {
            pageTemp = r;
            websiteModel.newPage(r._id, wid);
        }).then(function (r) {
            return pageTemp;
        });
    // var page = req.body;
    // page._id = (new Date).getTime() + "";
    // pages.push(page);
    // response.json(page);
    // return page;
}

function findAllPagesForWebsite(wid) {
    return pageModel.find({ _website : wid });
    // var websiteId = req.params.websiteId;
    // var pageList = [];
    // for(var p in pages){
    //     var currP = pages[p];
    //     if(currP.websiteId === websiteId){
    //         pageList.push(pages[p]);
    //     }
    // }
    // response.send(pageList);
    // return pageList;
}

function findPageById(pid) {
    return pageModel.findById(pid);
    // var pageId = req.params.pageId;
    // for(var p in pages){
    //     var currP = pages[p];
    //     if(currP._id === pageId){
    //         response.send(pages[p]);
    //         return pages[p];
    //     }
    // }
    // response.send("0")
}

function updatePage(page) {
    var pid = page._id;
    return pageModel.update({ _id : pid }, { $set : page});
    // var page = req.body;
    // var pageId = req.params.pageId;
    // for(var p in pages){
    //     var currP = pages[p];
    //     if(currP._id === pageId){
    //         pages[p] = page;
    //         response.json(page);
    //         return page;
    //     }
    // }
}

function deletePage(pid, wid) {
    return pageModel.remove({ _id : pid })
        .then(function (r) {
            return websiteModel.deletePage(pid, wid);
        })
    // var pageId = req.params.pageId;
    // for(var p in pages){
    //     if(pages[p]._id === pageId){
    //         delete pages[p];
    //         response.sendStatus(200);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}