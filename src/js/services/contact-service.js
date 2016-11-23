import { SERVER } from "../server";

function ContactService ($http) {
  this.allContacts = function () {
    return $http.get(SERVER);
  };

  this.addContact = function (person) {
    return $http.post(SERVER, person);
  };

  this.getContact = function (id) {
    let url = SERVER + id;
    return $http.get(url);
  };

};

ContactService.$inject = ['$http'];
export { ContactService };
