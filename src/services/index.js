import angular from 'angular';
import DataService from './DataService';
import FetchData from './FetchData';
import CreateContact from './CreateContact';
import HighlightTableData from './HighlightTableData';

export default angular.module("ServicesModule", [])
  .service("DataService", DataService)
  .service("FetchData", FetchData)
  .service("CreateContact", CreateContact)
  .service("HighlightTableData", HighlightTableData);
