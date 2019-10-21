import angular from 'angular';
import phonebookCtrl from './phonebookCtrl';

export default angular.module("phonebookModule", [])
  .controller("phonebookCtrl", phonebookCtrl);
