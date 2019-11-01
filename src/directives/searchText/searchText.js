export default function searchText() {
  return {
    restrict: "E",
    scope: {
      query: "=",
    },
    template: require("./tpl/searchText.html"),
  };
}
