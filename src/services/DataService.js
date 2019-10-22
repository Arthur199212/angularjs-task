import idGenerator from "../helpers/idGenerator";

DataService.$inject = ["$http"];

export default function DataService($http) {
  return {
    getAll: () => {
      return $http.get("https://raw.githubusercontent.com/Arthur199212/angularjs-task/master/src/data/db.json")
        .then(res => {
          this.data = res.data;
          return res.data;
        })
        .catch("Faild to load data");
    },

    addContact: (name, phone) => {
      if (name && phone) {
        const newContact = {
          id: idGenerator(),
          name: name,
          phone: phone
        };

        this.data = [...this.data, newContact];
      }

      return this.data;
    },

    removeContact: id => {
      this.data = this.data.filter(item => item.id !== id);
      return this.data;
    },
  };
}
