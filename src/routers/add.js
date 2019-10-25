export default function($stateProvider) {
    $stateProvider.state("add", {
      url: "/add",
      template: require("../directives/addPage/addPage.html"),
      controller: "PhonebookCtrl"
    });
  }
  