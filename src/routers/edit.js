export default function($stateProvider) {
    $stateProvider.state("edit", {
      url: "/edit",
      template: require("../directives/editPage/editPage.html"),
      controller: "PhonebookCtrl"
    });
  }
  