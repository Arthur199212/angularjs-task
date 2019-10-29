export default function addPage() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    scope: {},
    link,
    template: require("./addPage.html"),
    controllerAs: 'ctrl',
    controller: ['DataService', function addPageCtrl(DataService) {
      this.submited = false;

      this.handleClick = () => {
        if (this.contactData.name && this.contactData.phone) {
          DataService.addContact(this.contactData.name, this.contactData.phone);
          this.contactData.name = '';
          this.contactData.phone = '';
          this.submited = true;
        } else {
          alert('Fill out all the fields');
        }
      }
    }],
  };
}
