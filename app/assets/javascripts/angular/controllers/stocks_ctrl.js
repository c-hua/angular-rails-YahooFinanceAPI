app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();
  
  $scope.deleteStock = function(id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
}]);