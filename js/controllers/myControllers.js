myApp.controller('myControllers', function ($scope, $http) {
    // var url = "http://www.apilayer.net/api/live?access_key=d7e3c2f53e130c99035a377e0fec0161";
    // $http.get(url).then(function (response) {
    var data = {
        "success": true,
        "terms": "https://currencylayer.com/terms",
        "privacy": "https://currencylayer.com/privacy",
        "timestamp": 1489626553,
        "source": "USD",
        "quotes": {
            "USDAED": 3.672803,
            "USDAFN": 66.599998,
            "USDALL": 126.24968,
            "USDAMD": 483.660004,
            "USDANG": 1.790346,
            "USDAOA": 165.083986,
            "USDARS": 15.548974,
            "USDAUD": 1.299904,
            "USDAWG": 1.79,
            "USDAZN": 1.747016,
            "USDBAM": 1.824401,
            "USDBBD": 2,
            "USDBDT": 79.400002,
            "USDBGN": 1.841303,
            "USDBHD": 0.376202,
            "USDBIF": 1691.099976,
            "USDBMD": 1,
            "USDBND": 1.402701,
            "USDBOB": 6.869439,
            "USDBRL": 3.102799,
            "USDBSD": 1,
            "USDBTC": 0.000796,
            "USDBTN": 66.125003,
            "USDBWP": 10.433402,
            "USDBYN": 1.909694,
            "USDBYR": 20020,
            "USDBZD": 1.997701,
            "USDCAD": 1.32923,
            "USDCDF": 1332.000059,
            "USDCHF": 0.99932,
            "USDCLF": 0.02495,
            "USDCLP": 666.249912,
            "USDCNY": 6.913099,
            "USDCOP": 2959.699951,
            "USDCRC": 544.599976,
            "USDCUC": 1,
            "USDCUP": 1.000114,
            "USDCVE": 102.730003,
            "USDCZK": 25.172899,
            "USDDJF": 177.940002,
            "USDDKK": 6.92491,
            "USDDOP": 46.450001,
            "USDDZD": 109.393997,
            "USDEEK": 14.637045,
            "USDEGP": 18.000324,
            "USDERN": 15.289782,
            "USDETB": 22.500379,
            "USDEUR": 0.931399,
            "USDFJD": 2.089766,
            "USDFKP": 0.8127,
            "USDGBP": 0.81466,
            "USDGEL": 2.480993,
            "USDGGP": 0.814684,
            "USDGHS": 4.598499,
            "USDGIP": 0.812898,
            "USDGMD": 43.700001,
            "USDGNF": 9189.099609,
            "USDGTQ": 7.372977,
            "USDGYD": 203.229996,
            "USDHKD": 7.76638,
            "USDHNL": 23.486032,
            "USDHRK": 6.883901,
            "USDHTG": 68.529999,
            "USDHUF": 288.470001,
            "USDIDR": 13326,
            "USDILS": 3.622029,
            "USDIMP": 0.814684,
            "USDINR": 65.25012,
            "USDIQD": 1181,
            "USDIRR": 32424.000063,
            "USDISK": 109.250037,
            "USDJEP": 0.814684,
            "USDJMD": 126.999675,
            "USDJOD": 0.707302,
            "USDJPY": 113.29102,
            "USDKES": 102.550003,
            "USDKGS": 69.251999,
            "USDKHR": 3982.99967,
            "USDKMF": 460.750081,
            "USDKPW": 899.999911,
            "USDKRW": 1130.199951,
            "USDKWD": 0.304902,
            "USDKYD": 0.820065,
            "USDKZT": 318.559998,
            "USDLAK": 8189.999811,
            "USDLBP": 1505.400024,
            "USDLKR": 152.100006,
            "USDLRD": 90.999839,
            "USDLSL": 12.790079,
            "USDLTL": 3.0487,
            "USDLVL": 0.62055,
            "USDLYD": 1.424802,
            "USDMAD": 10.0082,
            "USDMDL": 19.624997,
            "USDMGA": 3134.999835,
            "USDMKD": 57.040001,
            "USDMMK": 1373.000148,
            "USDMNT": 2442.000331,
            "USDMOP": 7.999031,
            "USDMRO": 355.329987,
            "USDMUR": 35.369999,
            "USDMVR": 15.407292,
            "USDMWK": 717.049988,
            "USDMXN": 19.214802,
            "USDMYR": 4.433998,
            "USDMZN": 70.440002,
            "USDNAD": 12.995999,
            "USDNGN": 315.000174,
            "USDNIO": 29.249702,
            "USDNOK": 8.50227,
            "USDNPR": 108.599998,
            "USDNZD": 1.423503,
            "USDOMR": 0.384799,
            "USDPAB": 1,
            "USDPEN": 3.2535,
            "USDPGK": 3.270503,
            "USDPHP": 50.169998,
            "USDPKR": 104.599998,
            "USDPLN": 4.018496,
            "USDPYG": 5402.799805,
            "USDQAR": 3.641039,
            "USDRON": 4.231797,
            "USDRSD": 116.349899,
            "USDRUB": 58.437992,
            "USDRWF": 816.650024,
            "USDSAR": 3.749401,
            "USDSBD": 7.749396,
            "USDSCR": 13.406977,
            "USDSDG": 6.666996,
            "USDSEK": 8.87684,
            "USDSGD": 1.40337,
            "USDSHP": 0.812896,
            "USDSLL": 7436.999885,
            "USDSOS": 546.999476,
            "USDSRD": 7.480058,
            "USDSTD": 22826.699219,
            "USDSVC": 8.722202,
            "USDSYP": 514.97998,
            "USDSZL": 12.960264,
            "USDTHB": 35.049999,
            "USDTJS": 8.111398,
            "USDTMT": 3.4,
            "USDTND": 2.270499,
            "USDTOP": 2.2927,
            "USDTRY": 3.673101,
            "USDTTD": 6.709498,
            "USDTWD": 30.537001,
            "USDTZS": 2226.000483,
            "USDUAH": 26.839889,
            "USDUGX": 3583.999949,
            "USDUSD": 1,
            "USDUYU": 28.229643,
            "USDUZS": 3490.000098,
            "USDVEF": 9.974497,
            "USDVND": 22824,
            "USDVUV": 105.970001,
            "USDWST": 2.581502,
            "USDXAF": 610.48999,
            "USDXAG": 0.057438,
            "USDXAU": 0.000818,
            "USDXCD": 2.701246,
            "USDXDR": 0.740962,
            "USDXOF": 615.880005,
            "USDXPF": 110.599998,
            "USDYER": 249.949997,
            "USDZAR": 12.845597,
            "USDZMK": 5156.087145,
            "USDZMW": 9.439921,
            "USDZWL": 322.355011
        }
    }
    var listCurrency = data.quotes;
    var vndCurrency = data.quotes.USDVND;
    $scope.list = [];

    for (var key in listCurrency) {
        var item = {};
        item.codefrom = key.substring(0, 3);
        item.codeto = key.substring(3, 6);
        item.value = Math.round((1 / listCurrency[key]) * vndCurrency * 100) / 100;
        $scope.list.push(item);
    }
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