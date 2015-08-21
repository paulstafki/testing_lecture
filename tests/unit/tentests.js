/////////////     Name controller test ::: EXAMPLE!!!     ///////////////
describe('NameController', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('NameController', {'$scope': scope});
    }));
    it('test getFullName', function() {
        expect(scope.getFullName()).toBe('Joel Thomas Miller');
    });
});
///////////        MathController1 TEST    ////////////////
describe('MathController1', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('MathController1', {'$scope': scope});
    }));
    it('compares basicAddition and scope.charlie', function () {       // 1
        expect(scope.basicAddition()).toBeGreaterThan(scope.charlie);
    });
});
/////////////     MathController2 TEST     ///////////////
describe('MathController2', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('MathController2', {'$scope': scope});
    }));
    it('makes sure the total fruitWeight is less than the totalWeight carry-able', function () {   // 2
        expect(scope.fruitWeight()).toBeLessThan(scope.totalWeight);
    });
});
/////////////    MathController3 TEST     ////////////////
describe('MathController3', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('MathController3', {'$scope': scope});
    }));
    it('subtracts one number from another', function () {       // 3
        expect(scope.canipayrent()).toEqual(scope.rentMonies);
    });
});
/////////////    MathController4 TEST     ////////////////
describe('MathController4', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('MathController4', {'$scope': scope});
    }));
    it('finds how many motorcycles is the right number', function () {       // 4
        expect(scope.howManyMotorcycles()).toBeTruthy(scope.idealMotorcycles);
    });
});
/////////////    StringController1 TEST   ///////////////
describe('StringController1', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('StringController1', {'$scope': scope});
    }));
    it('combines two strings', function () {       // 5
        expect(scope.findSuperpower()).toEqual(scope.ourSuperpower);
    });
});
/////////////    StringController2 TEST   ///////////////
describe('StringController2', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('StringController2', {'$scope': scope});
    }));
    it('concatenates three strings checks for truthyness', function () {       // 6
        expect(scope.gangsters()).toBeTruthy("Jabba the Hutt");
    });
});
/////////////    StringController3 TEST   ///////////////
describe('StringController3', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('StringController3', {'$scope': scope});
    }));
    it('combine a string and a number to create mecha-string: destroyer-of-strings', function () {       // 7
        expect(scope.whatarewegoingtodotodayBrain()).toEqual("NARF!4");
    });
});

/////////////    BoolController1 TEST   ///////////////
describe('BoolController1', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('BoolController1', {'$scope': scope});
    }));
    it('compares the value of a string and a number', function () {       // 8
        expect(scope.numCompare()).toBeTruthy(true);
    });
});

/////////////    BoolController2 TEST   ///////////////
describe('BoolController2', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('BoolController2', {'$scope': scope});
    }));
    it('compares two strings for false comparison', function () {       // 9
        expect(scope.awesomenessCompare()).toBeFalsy(true);
    });
});

/////////////    BoolController3 TEST   ///////////////
describe('BoolController3', function() {
    beforeEach(module('myApp'));
    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();
        createController = $controller('BoolController3', {'$scope': scope});
    }));
    it('compares Ditka for Ditka', function () {       // 10
        expect(scope.testCompare()).toEqual(true);
    });
});