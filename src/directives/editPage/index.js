export default function editPage() {
  function link(scope, element, attrs, ctrl) {
    scope.contactId = ctrl.contactId; // ! WHY?
  }

  return {
    restrict: "E",
    link,
    template: require("./editPage.html"),
    controller: ['$stateParams', function editPageCtrl($stateParams) {
      this.contactId = $stateParams.contactId;
    }],
    controllerAs: 'ctrl',
  };
}
