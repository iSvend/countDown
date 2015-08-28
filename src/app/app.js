(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("countDown", [
    'countDown.timer',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
