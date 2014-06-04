app.factory('Stock', ['$resource', function($resource) {
  function Stock() {
    this.service = $resource('/api/stocks/:stockId', {stockId: '@id'});
  };
  Stock.prototype.all = function() {
    return this.service.query();
  };
  Stock.prototype.delete = function(stId) {
    return this.service.remove({stockId: stId});
  };
  Stock.prototype.create = function(attr) {
    return this.service.save(attr);
  }
  return new Stock;
}]);