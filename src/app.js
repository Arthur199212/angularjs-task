import angular from "angular";

import "./styles/style.scss";
import './filters';
import './services'
import './controllers';
import './directives';

angular.module("PhonebookApp", [
  "CustomFilters",
  "ServicesModule",
  "PhonebookModule",
  "Directives"
]);
