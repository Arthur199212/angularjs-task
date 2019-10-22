PhonebookCtrl.$inject = ["$scope", "FetchData", "HighlightTableData", "CreateContact", "DataService"];

export default function PhonebookCtrl($scope, FetchData, HighlightTableData, CreateContact, DataService) {
  $scope.checked = true;

  // Fetching data from fake server
  DataService.getAll().then(data => $scope.data = data);

  // Usage of HighlightTableData
  $scope.highlight = HighlightTableData;

  // Adding new contact
  $scope.addContact = () => {
    if ($scope.nameNew, $scope.phoneNew) {
      $scope.data = DataService.addContact($scope.nameNew, $scope.phoneNew);
  
      $scope.nameNew = '';
      $scope.phoneNew = '';
    } else {
      // TODO Validation
      alert('Fill all fields to add a new contact');
    }
  }

  // Delete contact
  $scope.deleteContact = item =>
    ($scope.data = $scope.data.filter(({ id }) => item.id !== id));
}
