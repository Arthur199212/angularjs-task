export default function createContact() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    scope: {},
    link,
    template: require("./createContact.html")
  };
}
