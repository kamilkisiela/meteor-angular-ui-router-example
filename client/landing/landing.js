angular.module('app')
    .config(config)
    .directive('landing', landingComp);

function config($stateProvider) {
    $stateProvider.state('landing', {
        url: '/',
        template: '<landing></landing>'
    });
}

function landingComp() {
    return {
        restrict: 'E',
        templateUrl: 'client/landing/landing.html',
        controller: function () {

        }
    };
}