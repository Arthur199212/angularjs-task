export default function filterContacts() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    scope: {
      query: "=",
      checked: "=",
      handleShow: "&"
    },
    link,
    template: require("./filterContacts.html")
  };
}
