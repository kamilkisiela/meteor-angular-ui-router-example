angular.module('app')
    .config(config)
    .directive('dashboardIndex', dashboardIndexComp);

function config($stateProvider) {
    $stateProvider.state('dashboard.index', {
        url: '',
        template: '<dashboard-index></dashboard-index>'
    });
}

function dashboardIndexComp() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard-index/dashboard-index.html',
        controllerAs: 'vm',
        controller: function () {
            
        }
    };
}