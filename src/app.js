import angular from "angular";

import "./styles/style.scss";

import PhonebookCtrl from './controllers/phonebookCtrl';
import filterContacts from './directives/filterContacts';
import contactsTable from './directives/contactsTable';
import contactData from './directives/contactData';
import createContact from './directives/createContact';
import DataService from './services/DataService';
import HighlightTableData from './services/HighlightTableData';
import DataFilter from './filters/DataFilter';

angular.module("PhonebookApp", [])
.controller("PhonebookCtrl", ["$scope", "HighlightTableData", "DataService", PhonebookCtrl])
.service("DataService", ["$http", DataService])
.service("HighlightTableData", HighlightTableData)
.filter("DataFilter", DataFilter)
.directive('filterContacts', filterContacts)
.directive('contactsTable', contactsTable)
.directive('contactData', contactData)
.directive('createContact', createContact);
