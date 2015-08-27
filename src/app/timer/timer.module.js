(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('timer', {
            url: '/',
            views: {
                "main": {
                    controller: 'TimerController as model',
                    templateUrl: 'timer/timer.tpl.html'
                }
            },
            data:{ pageTitle: 'Countdown' }
        });
    });

}(angular.module("countDown.timer", [
    'ui.router'
])));
