function LayoutController ($scope) {
  console.log("testing layout controller");

  $scope.clickMe = function () {
    console.log("I got clicked");
  };
}

LayoutController.$inject = ['$scope'];
export { LayoutController };
