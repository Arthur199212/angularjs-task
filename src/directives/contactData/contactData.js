export default function contactData() {
  return {
    restrict: "E",
    scope: {
      data: "=",
      query: "=",
      checked: "=",
      deleteContact: "&",
    },
    template: require("./tpl/contactData.html"),
    controllerAs: "ctrl",
    controller: [ "$scope", "DataService", function(scope, DataService) {
        this.deleteContact = ({ id }) => {
          scope.data = DataService.removeContact(id);
        };
      },
    ],
  };
}
