PhonebookCtrl.$inject = ["$scope", "HighlightTableData", "DataService"];

export default function PhonebookCtrl($scope, HighlightTableData, DataService) {
  // Show phone numbers
  $scope.checked = localStorage.getItem('showNumbers') === 'true';

  $scope.handleShow = () => {
    localStorage.setItem('showNumbers', `${!$scope.checked}`);
    $scope.checked = !$scope.checked;
  }

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
  $scope.deleteContact = ({ id }) => {
    $scope.data = DataService.removeContact(id);
  }
}
