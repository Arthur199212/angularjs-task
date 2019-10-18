import angular from 'angular';
import dataFilter from './dataFilter';

export default angular.module("customFilters", [])
  .filter("dataFilter", dataFilter);
