export default function PhonebookCtrl(HighlightTableData, DataService) {
  // Show phone numbers
  this.checked = localStorage.getItem("showNumbers") === "true";

  this.handleShow = () => {
    localStorage.setItem("showNumbers", `${!this.checked}`);
    this.checked = !this.checked;
  };

  // Fetching data from fake server
  const savedData = JSON.parse(localStorage.getItem("savedData"));

  if (savedData) {
    this.data = DataService.getSavedData();
  } else {
    DataService.getAll().then(data => {
      this.data = data;
    });
  }

  // Usage of HighlightTableData
  this.highlight = HighlightTableData;

  // Adding new contact
  this.addContact = () => {
    if ((this.nameNew, this.phoneNew)) {
      this.data = DataService.addContact(this.nameNew, this.phoneNew);

      this.nameNew = "";
      this.phoneNew = "";
    } else {
      // TODO Validation
      alert("Fill all fields to add a new contact");
    }
  };

  // Delete contact
  this.deleteContact = ({ id }) => {
    this.data = DataService.removeContact(id);
  };
}
