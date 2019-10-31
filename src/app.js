import angular from "angular";
import 'angular-ui-router';
import 'angular-messages';

import "./styles/style.scss";

import PhonebookCtrl from './controllers/phonebookCtrl';
import contactsTable from './directives/contactsTable/contactsTable';
import contactData from './directives/contactData/contactData';
import createContact from './directives/createContact/createContact';
import editPage from './directives/editPage/editPage';
import addPage from './directives/addPage/addPage';
import homePage from './directives/homePage/homePage';
import searchText from './directives/searchText/searchText';
import showPhoneNumbers from './directives/showPhoneNumbers/showPhoneNumbers';
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
.directive('homePage', homePage)
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
