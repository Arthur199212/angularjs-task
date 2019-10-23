import angular from 'angular';
import filterContacts from './filterContacts';
import contactsTable from './contactsTable';
import createContact from './createContact';

export default angular.module('Directives', [])
    .directive('filterContacts', filterContacts)
    .directive('contactsTable', contactsTable)
    .directive('createContact', createContact);
