import angular from "angular";

import "./style.scss";
import './filters';
import './controllers';

angular.module("phonebookApp", [
  "customFilters",
  "phonebookModule"
]);
