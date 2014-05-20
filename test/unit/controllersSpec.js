'use strict';

describe('PhoneListCtrl', function(){

  beforeEach(angular.mock.module('phonecatApp'));

  it('should create "phones" model with 3 phones', angular.mock.inject(function($controller) {
    var scope = {},
    ctrl = $controller('PhoneListCtrl', {$scope:scope});
    expect(scope.phones.length).toBe(3);
  }));

});