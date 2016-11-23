function AddController ($state, ContactService) {
  let vm = this;

  this.addContact = addContact;

  function addContact (contact) {
    console.log("Testing add controller");
    ContactService.addContact(contact).then((resp) => {
      $state.go('root.home');
    });
  };
};

AddController.$inject = ['$state', 'ContactService'];
export { AddController };
