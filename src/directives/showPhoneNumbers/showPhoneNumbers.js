export default function showPhoneNumbers() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    scope: {
      checked: "=",
      handleShow: "&"
    },
    link,
    template: require("./tpl/showPhoneNumbers.html")
  };
}
