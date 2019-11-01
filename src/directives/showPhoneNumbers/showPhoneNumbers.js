export default function showPhoneNumbers() {
  return {
    restrict: "E",
    scope: {
      checked: "=",
    },
    template: require("./tpl/showPhoneNumbers.html"),
    controllerAs: 'ctrl',
    controller: ["$scope", function(scope) {
      this.$onInit = () => scope.checked = localStorage.getItem("showNumbers") === "true";

      this.onClick = () => localStorage.setItem("showNumbers", `${!scope.checked}`);
      },
    ],
  };
}
