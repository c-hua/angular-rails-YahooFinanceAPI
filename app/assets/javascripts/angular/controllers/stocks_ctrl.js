app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();

    $scope.deleteStock = function(idx) {
    $scope.stocks.splice(idx, 1);
  };
}]);
