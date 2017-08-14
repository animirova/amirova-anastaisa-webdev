/**
 * Created by ani on 8/08/17.
 */
(function () {
    angular.module("WebAppMaker").service("flickrService", flickrService);

    function flickrService($http) {
        this.searchPhotos = searchPhotos;
        this.selectPhoto = selectPhoto;
        var key = '68d98b236e0bfb0b29a79f9510919364';
        var secret = '908ed712267449c2';
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function selectPhoto(wgid, img) {
        // var wgid = widget._id;
        // var pid = widget._page;
        // var url = "/api/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + wgid;
        // var flickrUrl ="https://farm"+img.farm+".staticflickr.com/"+img.server+"/"+img.id+"_"+ img.secret + ".jpg"
        // var newImg = { url : flickrUrl };
        //
        // return $http.put(url, newImg)
        //     .then(function(r) {
        //         return r;
        //     });


        var url = "https://farm" + img.farm + ".staticflickr.com/" + img.server;
        url += "/" + img.id + "_" + img.secret + "_b.jpg";
        var obj = {url: url, _id: wgid};

        var _url = "/api/widget/" + wgid;

        return $http.put(_url, obj)
            .then(function (response) {
                return response;
            });
        }

    function searchPhotos(searchStr) {
        var searchUrl = urlBase.replace("API_KEY", key).replace("TEXT", searchStr);
        console.log(searchUrl);
        return $http.get(searchUrl);
    }

    }

})();