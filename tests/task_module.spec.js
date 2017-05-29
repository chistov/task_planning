describe('basic', function () {

  beforeEach(module('taskModule'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('intervalId is null', function () {
    var $scope = {};
    var controller = $controller('tasksCtrl', { $scope: $scope });
    console.log('scope: ', $scope.taskName);
    expect($scope.taskName.intervalId).toBe(null);
  });	

});
