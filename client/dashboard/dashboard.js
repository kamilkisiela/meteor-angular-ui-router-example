angular.module('app')
    .config(config)
    .directive('dashboard', dashboardComp);

function config($stateProvider) {
    $stateProvider.state('dashboard', {
        abstract: true,
        url: '/dashboard',
        template: '<dashboard></dashboard>'
    });
}

/**
 * Dashboard component
 * @returns {Object}
 */
function dashboardComp() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard/dashboard.html',
        controller: function () {

        }
    };
}