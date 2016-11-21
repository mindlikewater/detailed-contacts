$scope.contacts = [];

function init () {
  console.log("Starting home controller");
  $http.get(SERVER).then((resp) => {
  });
}

HomeController.$inject = ['ContactService'];
export { HomeController };
