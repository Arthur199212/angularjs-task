export default function () {
  function link(scope, element, { addClass }) {
    const customClass = () => {
      switch (addClass.toLowerCase()) {
        case "a":
          return "red_field";
        case "b":
          return "blue_field";
        default:
          return "";
      }
    }

    element.addClass(customClass);
  }

  return {
    restrict: "A",
    scope: {},
    link,
  };
}
