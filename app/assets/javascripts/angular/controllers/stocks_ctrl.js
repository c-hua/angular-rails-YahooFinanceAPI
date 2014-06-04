app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();
}]);