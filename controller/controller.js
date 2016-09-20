var app = angular.module("bitcoinPlus", [ 
	]);

/*
app.controller("Menu", function($scope){
$scope.nombre = "dfgf";
});
*/

app.controller("Clock", function($scope, $window){
	var vm = $scope;
	vm.amount = 4000;






	if (vm.amount >= 5000) {

		angular.element('.withdraw').css('background-color', '#67eb67');
	}else { 

		angular.element('.withdraw').click(function () {
			$window.alert("you can withdraw when you get 5000 satoshi or more.");
		});





	}




});

/*
app.controller("Counter", function($scope,$timeout){



    $scope.counter = 3000;
    $scope.onTimeout = function(){
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
    
app.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])
	

});

*/

function MyCtrl($scope, $interval) {
	var intervalId;

	$scope.counter = 0;
	$scope.initialCountdown = 10;
	$scope.countdown = $scope.initialCountdown;

	$scope.timer = function(){
		var startTime = new Date();
		intervalId = $interval(function(){
			var actualTime = new Date();
			$scope.counter = Math.floor((actualTime - startTime) / 1000);
			$scope.countdown = $scope.initialCountdown - $scope.counter;
		}, 1000);
	};

	$scope.$watch('countdown', function(countdown){
		if (countdown === 0){
			$scope.stop();
		}
	});

	$scope.start = function(){
		$scope.timer(angular.element(document).ready);
	};

	$scope.stop = function(){
		$interval.cancel(intervalId);
	};

}

app.controller('MyCtrl', MyCtrl);

app.filter('secondsToDateTime', [function() {
	return function(seconds) {
		return new Date(1970, 0, 1).setSeconds(seconds);
	};
}])



//prop.("disabled","true");