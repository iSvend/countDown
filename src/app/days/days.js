(function(app) {
	
    app.controller('DaysController', function ($scope) {
		$scope.eventDay = {
			date: new Date('September 1, 2016 08:00:00'),
			eventDetails: 'Opening'
		};
		$scope.timeTillEvent = {};
		
		var updateClock = function () {
			$scope.seconds = ($scope.eventDay.date - new Date()) / 1000;
			$scope.timeTillEvent = {
				daysLeft: parseInt($scope.seconds / 86400),
				hoursLeft: parseInt($scope.seconds / 3600),
				minutesLeft: parseInt($scope.seconds / 60),
				secondsLeft: parseInt($scope.seconds)
			};
		};
		
		setInterval(function () {
			$scope.$apply(updateClock);
		}, 1000);
		updateClock();
		});
	
}(angular.module("countDown.days")));