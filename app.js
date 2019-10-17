const app = angular.module("phonebookApp", []);

app.controller("MainController", function searchCtrl($scope, $http) {
  // $http.get("data.json").then(res => ($scope.data = res.data));

    $scope.data = [
        {
            "name": "Mark",
            "phone": "+375298000000"
        },
        {
            "name": "Jacob",
            "phone": "+375298000000"
        },
        {
            "name": "Larry",
            "phone": "+375298000000"
        },
        {
            "name": "Dean",
            "phone": "+375298000000"
        },
        {
            "name": "John",
            "phone": "+375298000000"
        },
        {
            "name": "Sam",
            "phone": "+375298000000"
        },
        {
            "name": "Carl",
            "phone": "+375298000000"
        },
        {
            "name": "Tom",
            "phone": "+375298000000"
        },
        {
            "name": "Lisa",
            "phone": "+375298000000"
        },
        {
            "name": "Wally",
            "phone": "+375298000000"
        },
        {
            "name": "Finn",
            "phone": "+375298000000"
        }
    ];


});
