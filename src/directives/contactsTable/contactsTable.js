export default function contactsTable() {
  return {
    restrict: "E",
    scope: {
      query: '<',
      checked: '<',
    },
    template: require("./tpl/contactsTable.html"),
    controllerAs: 'ctrl',
    controller: [ "DataService", function (DataService) {
        // Fetching data from a fake server
        this.$onInit = function () {
          const savedData = JSON.parse(localStorage.getItem("savedData"));
  
          if (savedData) {
            this.data = DataService.getSavedData();
          } else {
            DataService.getAll().then(data => {
              this.data = data;
            });
          }
        }

        this.deleteContact = ({ id }) => {
          this.data = DataService.removeContact(id);
        };
      },
    ],
  };
}
