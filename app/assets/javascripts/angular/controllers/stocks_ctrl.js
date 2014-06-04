app.controller('StocksCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Stocks = $resource('/api/stocks');
  $scope.stocks = Stocks.query();
}]);