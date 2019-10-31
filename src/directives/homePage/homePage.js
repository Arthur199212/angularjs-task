export default function contactData() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    link,
    controller: 'PhonebookCtrl',
    template: require("./tpl/homePage.html")
  };
}
