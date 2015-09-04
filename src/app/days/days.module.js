(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('days', {
            url: '/count_only',
            views: {
                "main": {
                    controller: 'DaysController as model',
                    templateUrl: 'days/days.tpl.html'
                }
            },
            data:{ pageTitle: 'Days Left' }
        });
    });

}(angular.module("countDown.days", [
    'ui.router'
])));
