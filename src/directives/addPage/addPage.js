export default function addPage() {
  return {
    restrict: "E",
    scope: {},
    template: require("./tpl/addPage.html"),
    controllerAs: 'ctrl',
    controller: ['DataService', function addPageCtrl(DataService) {
      this.checkNumber = /^[+][0-9]{1,3}[\s][(][0-9]{1,3}[)][\s][0-9]{3}[-][0-9]{2}[-][0-9]{2}$|^[+][0-9]{1,3}[\s][0-9]{1,3}[\s][0-9]{3}[-][0-9]{2}[-][0-9]{2}$|^[+][0-9]{1,3}[\s][0-9]{1,3}[\s][0-9]{3}[\s][0-9]{2}[\s][0-9]{2}$|^[+][0-9]{,13}$/g;
      this.checkName = /^[A-Z, a-z]{3,20}$/;
      
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
