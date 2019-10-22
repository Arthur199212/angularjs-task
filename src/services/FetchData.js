FetchData.$inject = ["$http"];

export default function FetchData($http) {
  return () => $http.get("https://raw.githubusercontent.com/Arthur199212/angularjs-task/master/src/data/db.json");
}
