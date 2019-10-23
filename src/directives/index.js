import angular from 'angular';
import filterContacts from './filterContacts';
import contactsTable from './contactsTable';
import contactData from './contactData';
import createContact from './createContact';

export default angular.module('Directives', [])
    .directive('filterContacts', filterContacts)
    .directive('contactsTable', contactsTable)
    .directive('contactData', contactData)
    .directive('createContact', createContact);
