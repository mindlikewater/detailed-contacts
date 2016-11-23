function HomeController (ContactService) {
  let vm = this;

  vm.contacts = [];

  function init () {
    ContactService.allContacts().then((resp) => {
      vm.contacts = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['ContactService'];
export { HomeController };
