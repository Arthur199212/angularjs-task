export default function searchText() {
  function link(scope, element, attrs) {}

  return {
    restrict: "E",
    scope: {
      query: "=",
    },
    link,
    template: require("./searchText.html")
  };
}
