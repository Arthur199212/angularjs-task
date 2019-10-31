export default function contactsTable() {
    function link (scope, element, attrs) {

    }

    return {
      restrict: 'E',
      link,
      template: require('./tpl/contactsTable.html'),
    }
  }
