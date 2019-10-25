export default function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("home", {
    url: "/",
    template: require("../directives/homePage/homePage.html"),
    controller: "PhonebookCtrl"
  });
}
