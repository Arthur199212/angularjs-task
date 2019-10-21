import angular from 'angular';
import PhonebookCtrl from './PhonebookCtrl';

export default angular.module("PhonebookModule", [])
  .controller("PhonebookCtrl", PhonebookCtrl);
