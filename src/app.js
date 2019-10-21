import angular from "angular";

import "./style.scss";
import './filters';
import phonebookCtrl from './controllers/phonebookCtrl';

const app = angular.module("phonebookApp", [
  "customFilters"
]);

app.controller("PhonebookCtrl", phonebookCtrl);
