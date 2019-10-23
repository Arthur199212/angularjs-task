export default function createContact() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    scope: {
      nameNew: "=",
      phoneNew: "=",
      addContact: "&",
    },
    link,
    template: require("./createContact.html")
  };
}
