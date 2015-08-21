var app = angular.module("myApp", []);

app.controller('NameController', function NameController($scope) {
    $scope.first = "Joel";
    $scope.middle = "Thomas";
    $scope.last = "Miller";
    $scope.getFirst = function(){
        return $scope.first;
    };
    $scope.getMiddle = function(){
        return $scope.middle;
    };
    $scope.getLast = function(){
        return $scope.last;
    };
    $scope.getFullName = function() {
        return $scope.first + ' ' + $scope.middle + ' ' + $scope.last
    }
});

app.controller('MathController1', function MathController1($scope) {
    $scope.alpha = 2;
    $scope.bravo = 3;
    $scope.charlie = 4;
    $scope.basicAddition = function() {
        return $scope.alpha + $scope.bravo
    }
});

app.controller('MathController2', function MathController2($scope) {
    $scope.fruit = 4;
    $scope.weight = 3;
    $scope.totalWeight = 15;
    $scope.fruitWeight = function() {
        return $scope.fruit * $scope.weight
    }
});

app.controller('MathController3', function MathController3($scope) {
    $scope.myDollars = 12;
    $scope.thingiwantbadcost = 11;
    $scope.rentMonies = 1;
    $scope.canipayrent = function() {
        return $scope.myDollars - $scope.thingiwantbadcost
    }
});

app.controller('MathController4', function MathController4($scope) {
    $scope.currentMotorcycles = 3;
    $scope.idealMotorcycles = 4;
    $scope.howManyMotorcycles = function() {
        return $scope.currentMotorcycles + 1
    }
});

app.controller('StringController1', function StringController1($scope) {
    $scope.whatiam = "fool";
    $scope.whatyouare = "hardy";
    $scope.ourSuperpower = "foolhardy";
    $scope.findSuperpower = function() {
        return $scope.whatiam + $scope.whatyouare
    }
});

app.controller('StringController2', function StringController2($scope) {
    $scope.the = "Jabba";
    $scope.hutts = "the";
    $scope.are = "Hutt";
    $scope.gangsters = function() {
        return $scope.the + " " + $scope.hutts + " " + $scope.are
    }
});

app.controller('StringController3', function StringController3($scope) {
    $scope.pinky = "NARF!";
    $scope.brain = 4;
    $scope.whatarewegoingtodotodayBrain = function() {
        return $scope.pinky + $scope.brain
    }
});

app.controller('BoolController1', function BoolController1($scope) {
    $scope.stringy = "4";
    $scope.numbery = 4;
    $scope.numCompare = function() {
        return $scope.stringy = $scope.numbery
    }
});

app.controller('BoolController2', function BoolController2($scope) {
    $scope.hansolo = "Han Solo";
    $scope.bobafett = "Boba Fett";
    $scope.awesomenessCompare = function() {
        return $scope.hansolo === $scope.bobafett
    }
});

app.controller('BoolController3', function BoolController3($scope) {
    $scope.testquestion = "Coach Ditka";
    $scope.testanswer = "Coach Ditka";
    $scope.testCompare = function() {
        return $scope.testquestion === $scope.testanswer
    }
});