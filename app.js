import angular from 'angular';
import './style.scss';

const app = angular.module("phonebookApp", []);

app.controller("MainController", function searchCtrl($scope, $http) {
  $http.get("data.json").then(res => ($scope.data = res.data));
});
