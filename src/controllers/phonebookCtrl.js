import idGenerator from "../helpers/idGenerator";

PhonebookCtrl.$inject = ["$scope", "FetchData", "HighlightTableData", "CreateContact"];

export default function PhonebookCtrl($scope, FetchData, HighlightTableData, CreateContact) {
  $scope.checked = true;

  // Fetching data from fake server
  FetchData()
    .then(res => {
      $scope.data = res.data;
    })
    .catch(() => {
      console.log('Error with connection');
    });

  // Usage of HighlightTableData
  $scope.highlight = HighlightTableData;

  // Adding new contact
  $scope.addContact = () => {
    const newContact = CreateContact($scope.nameNew, $scope.phoneNew);

    if (newContact) {
      $scope.data = [...$scope.data, newContact]

      $scope.nameNew = "";
      $scope.phoneNew = "";
    } else {
      // TODO Form validation
      alert("Fill up all the fields to create a new contact");
    }
  };

  // Delete contact
  $scope.deleteContact = item =>
    ($scope.data = $scope.data.filter(({ id }) => item.id !== id));
}
