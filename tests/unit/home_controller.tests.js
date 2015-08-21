//describe('HomeController', function() {
//    it('adds two numbers together', function () {
//      expect(1 + 2).toEqual(3);
//    });
//});
//
//describe('HomeController', function() {
//  it('adds two numbers together', function () {
//    expect(1 + 4).toEqual(5);
//  });
//});
//
//describe('HomeController', function() {
//  it('adds two numbers together', function () {
//    expect(1 + 5).toEqual(6);
//  });
//});
//
//describe('HomeController', function() {
//  beforeEach(module('myApp'));
//
//  var controller;
//
//  beforeEach(inject(function ($rootScope, $controller, _$location_) {
//    $location = _$location_;
//    scope = $rootScope.$new();
//
//    createController = $controller('PasswordController', {'$scope': scope});
//  }));
//
//  describe('$scope.grade', function() {
//    it('sets the strength to "strong" if the password length is >8 chars', function() {
//      //var $scope = {};
//      //var controller = createController;
//      scope.password = 'longerthaneightchars';
//      scope.grade();
//      expect(scope.strength).toEqual('strong');
//      //expect(scope.password).toBe('test');
//    });
//  });
//});