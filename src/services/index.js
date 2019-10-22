import angular from 'angular';
import DataService from './DataService';
import HighlightTableData from './HighlightTableData';

export default angular.module("ServicesModule", [])
  .service("DataService", DataService)
  .service("HighlightTableData", HighlightTableData);
