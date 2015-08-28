(function(app) {
	
    app.controller('TimerController', function ($scope) {
		$scope.eventDay = {
			date: new Date('September 15, 2016 20:00:00'),
			eventDetails: 'Getting bigger'
		};
		$scope.timeTillEvent = {};
		
		var updateClock = function () {
			$scope.seconds = ($scope.eventDay.date - new Date()) / 1000;
			$scope.timeTillEvent = {
				daysLeft: parseInt($scope.seconds / 86400),
				hoursLeft: parseInt($scope.seconds % 86400 / 3600),
				minutesLeft: parseInt($scope.seconds % 86400 % 3600 / 60),
				secondsLeft: parseInt($scope.seconds % 86400 % 3600 % 60)
			};
		};
		
		setInterval(function () {
			$scope.$apply(updateClock);
		}, 1000);
		updateClock();
		});
	
}(angular.module("countDown.timer")));