myApp.controller('myControllers', function ($scope, myFactory) {
    // var url = "http://www.apilayer.net/api/live?access_key=d7e3c2f53e130c99035a377e0fec0161";

    myFactory.getCurrency().then(function (response) {
        var data = response.data;

        var listCurrency = data.quotes;
        var vndCurrency = data.quotes.USDVND;
        $scope.list = [];

        for (var key in listCurrency) {
            var item = {};
            item.codefrom = key.substring(0, 3);
            item.codeflag = key.substring(3, 5).toLowerCase();
            console.log(item.codeflag);
            item.codeto = key.substring(3, 6);
            item.value = Math.round((1 / listCurrency[key]) * vndCurrency * 100) / 100;
            item.value = item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $scope.list.push(item);
        }

    }, function (error) {
        return error;
    })

    // $http.get(url).then(function (response) {
    //     var data = response.data;

    //     var listCurrency = data.quotes;
    //     var vndCurrency = data.quotes.USDVND;
    //     $scope.list = [];

    //     for (var key in listCurrency) {
    //         var item = {};
    //         item.codefrom = key.substring(0, 3);
    //         item.codeflag = key.substring(3, 5).toLowerCase();
    //         console.log(item.codeflag);
    //         item.codeto = key.substring(3, 6);
    //         item.value = Math.round((1 / listCurrency[key]) * vndCurrency * 100) / 100;
    //         item.value = item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //         $scope.list.push(item);
    //     }
    // });

});


// myApp.controller('myControllers', function ($scope, $http) {
//     var url = "http://www.apilayer.net/api/live?access_key=d7e3c2f53e130c99035a377e0fec0161";
//     $http.get(url).then(function (response) {
//         var data = response.data;
//         var listCurrency = data.quotes;
//         var vndCurrency = data.quotes.USDVND;
//         $scope.list = [];

//         for (var key in listCurrency) {
//             var item = {};
//             item.codefrom = key.substring(0, 3);
//             item.codeto = key.substring(3, 6);
//             item.value = Math.round((1 / listCurrency[key]) * vndCurrency * 100) / 100;
//             $scope.list.push(item);
//         }
//     });

// });
