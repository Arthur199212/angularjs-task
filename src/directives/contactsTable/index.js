export default function contactsTable() {
    function link (scope, element, attrs) {
        // scope.name = 'Directive';
    }

    return {
      restrict: 'E',
    //   scope: {
    //     name: '='
    //   },
      link,
      template: require('./contactsTable.html'),
    }
  }
