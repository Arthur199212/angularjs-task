import idGenerator from "../helpers/idGenerator";

export default function DataService($http) {
  this.saveDataToLocalStorage = () =>
    localStorage.setItem("savedData", JSON.stringify(this.data));

  this.getAll = () => {
    return $http
      .get(
        "https://raw.githubusercontent.com/Arthur199212/angularjs-task/task-3/src/data/db.json"
      )
      .then(res => {
        this.data = res.data;

        return res.data;
      })
      .catch("Faild to load data");
  };

  this.getSavedData = () =>
    this.data = JSON.parse(localStorage.getItem("savedData"));

  this.addContact = (name, phone) => {
    if (name && phone) {
      const newContact = {
        id: idGenerator(),
        name: name,
        phone: phone
      };

      this.data = [...this.data, newContact];

      this.saveDataToLocalStorage();
    }

    return this.data;
  };

  this.editContact = editedContact => {
    this.data = [
      ...this.data.filter(({ id }) => editedContact.id !== id),
      editedContact
    ];

    this.saveDataToLocalStorage();

    return this.data;
  };

  this.removeContact = id => {
    this.data = this.data.filter(item => item.id !== id);

    this.saveDataToLocalStorage();

    return this.data;
  };
}
