(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
	});

    app.run(function () {});

app.controller('AppController', function ($scope) {

    });

}(angular.module("countDown", [
    'countDown.timer',
	'countDown.days',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
	'ui.bootstrap',
])));
