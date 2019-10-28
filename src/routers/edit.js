export default function($stateProvider) {
  $stateProvider.state("edit", {
    url: "/edit/{contactId}",
    component: "editPage"
  });
}
