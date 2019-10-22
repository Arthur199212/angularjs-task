import angular from "angular";

import "./styles/style.scss";
import './filters';
import './controllers';
import './services'

angular.module("PhonebookApp", [
  "CustomFilters",
  "ServicesModule",
  "PhonebookModule"
]);
