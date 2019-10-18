import angular from "angular";

import "./style.scss";
import './filters';

const app = angular.module("phonebookApp", [
  "customFilters"
]);

app.controller("MainController", function searchCtrl($scope, $http) {
  $scope.checked = true;

  $http.get("data.json").then(res => {
    $scope.data = res.data;

    $scope.highlite = firstLetter => {
      switch (firstLetter.toLowerCase()) {
        case "a":
          return "red_field";
        case "b":
          return "blue_field";
        default:
          return "";
      }
    };
  });

  $scope.addContact = () => {
    if ($scope.nameNew && $scope.phoneNew) {
      $scope.data = [...$scope.data, {
        name: $scope.nameNew,
        phone: $scope.phoneNew
      }]
    }
  }
});
