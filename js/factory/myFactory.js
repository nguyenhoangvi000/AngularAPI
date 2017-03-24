myApp.factory('myFactory', ['$http', function ($http) {

    var urlBase = "http://www.apilayer.net/api/live?access_key=d7e3c2f53e130c99035a377e0fec0161";
    var myFactory = {};

    myFactory.getCurrency = function () {
        return $http.get(urlBase);
    }

    return myFactory;
}])