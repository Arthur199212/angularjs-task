export default function createContact() {
    function link (scope, element, attrs) {
        // scope.name = 'Directive';
    }

    return {
      restrict: 'E',
    //   scope: {
    //     name: '='
    //   },
      link,
      template: require('./createContact.html'),
    }
  }
