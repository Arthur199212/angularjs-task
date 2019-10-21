import idGenerator from '../helpers/idGenerator';

export default function searchCtrl($scope, $http) {
    $scope.checked = true;
  
    $http.get("data.json").then(res => {
      $scope.data = res.data;
  
      $scope.highlite = firstLetter => {
        switch (firstLetter.toLowerCase()) {
          case "a":
            return "red_field";
          case "b":
            return "blue_field";
          default:
            return "";
        }
      };
    });
  
    $scope.addContact = () => {
      if ($scope.nameNew && $scope.phoneNew) {
        $scope.data = [...$scope.data, {
          id: idGenerator(),
          name: $scope.nameNew,
          phone: $scope.phoneNew
        }];
  
        $scope.nameNew = '';
        $scope.phoneNew = '';
      } else {
        alert('Fill up all the fields to create a new contact');
      }
    }
  
    $scope.deleteContact = item =>
      $scope.data = $scope.data.filter(({ id }) => item.id !== id);
  }