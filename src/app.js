import angular from "angular";
import 'angular-ui-router';
import 'angular-messages';

import "./styles/style.scss";

import PhonebookCtrl from './controllers/phonebookCtrl';
import contactsTable from './directives/contactsTable';
import contactData from './directives/contactData';
import createContact from './directives/createContact';
import editPage from './directives/editPage';
import addPage from './directives/addPage';
import searchText from './directives/searchText';
import showPhoneNumbers from './directives/showPhoneNumbers';
import DataService from './services/DataService';
import HighlightTableData from './services/HighlightTableData';
import DataFilter from './filters/DataFilter';

import home from './routers/home';
import add from './routers/add';
import edit from './routers/edit';

angular.module("PhonebookApp", ["ui.router", "ngMessages"])
.controller("PhonebookCtrl", ["HighlightTableData", "DataService", PhonebookCtrl])
.service("DataService", ["$http", DataService])
.service("HighlightTableData", HighlightTableData)
.filter("DataFilter", DataFilter)
.directive('contactsTable', contactsTable)
.directive('contactData', contactData)
.directive('createContact', createContact)
.directive('addPage', ['DataService', addPage])
.directive('editPage', ['$stateParams', 'DataService', editPage])
.directive('searchText', searchText)
.directive('showPhoneNumbers', showPhoneNumbers)
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', home])
.config(['$stateProvider', add])
.config(['$stateProvider', edit])
