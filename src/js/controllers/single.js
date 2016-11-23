function SingleController (ContactService, $stateParams) {
  let vm = this;

  vm.contact = {};

  function init () {
    ContactService.getContact($stateParams.id).then((resp) => {
      vm.contact = resp.data;
    });
  };

  init();
}

SingleController.$inject = ['ContactService', '$stateParams'];
export { SingleController };
