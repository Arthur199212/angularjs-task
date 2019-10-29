export default function editPage() {
  function link(scope, element, attrs, ctrl) {
  }

  return {
    restrict: "E",
    scope: {},
    link,
    template: require("./editPage.html"),
    controllerAs: 'ctrl',
    controller: ['$stateParams', 'DataService', function editPageCtrl($stateParams, DataService) {
      this.submited = false;

      this.contactId = $stateParams.contactId;
      this.selectedContact = DataService.data.find(({ id }) => id === this.contactId);

      this.contactData = {...this.selectedContact};

      this.handleEditContact = () => {
        DataService.editContact(this.contactData);
        this.submited = true;
      }
    }],
  };
}
