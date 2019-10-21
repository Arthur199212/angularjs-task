import angular from "angular";

import "./style.scss";
import './filters';
import './controllers';

angular.module("PhonebookApp", [
  "CustomFilters",
  "PhonebookModule"
]);
