export default function contactData() {
    function link (scope, element, attrs) {

    }

    return {
      restrict: 'E',
      link,
      template: require('./tpl/contactData.html'),
    }
  }
