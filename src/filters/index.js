import angular from 'angular';
import DataFilter from './DataFilter';

export default angular.module("CustomFilters", [])
  .filter("DataFilter", DataFilter);
