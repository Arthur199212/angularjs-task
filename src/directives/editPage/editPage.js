export default function editPage() {
  return {
    restrict: "E",
    scope: {},
    template: require("./tpl/editPage.html"),
    controllerAs: "ctrl",
    controller: ["$stateParams", "DataService", function editPageCtrl($stateParams, DataService) {
        this.checkNumber = /^[+][0-9]{1,3}[\s][(][0-9]{1,3}[)][\s][0-9]{3}[-][0-9]{2}[-][0-9]{2}$|^[+][0-9]{1,3}[\s][0-9]{1,3}[\s][0-9]{3}[-][0-9]{2}[-][0-9]{2}$|^[+][0-9]{1,3}[\s][0-9]{1,3}[\s][0-9]{3}[\s][0-9]{2}[\s][0-9]{2}$|^[+][0-9]{,13}$/g;
        this.checkName = /^[A-Z, a-z]{3,20}$/;

        this.submited = false;

        this.contactId = $stateParams.contactId;
        this.selectedContact = DataService.data.find(
          ({ id }) => id === this.contactId
        );

        this.contactData = { ...this.selectedContact };

        this.handleEditContact = () => {
          DataService.editContact(this.contactData);
          this.submited = true;
        };
      }
    ]
  };
}
