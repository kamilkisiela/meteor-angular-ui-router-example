angular.module('app')
    .config(config)
    .directive('dashboardMessages', dashboardMessagesComp);

function config($stateProvider) {
    $stateProvider.state('dashboard.messages', {
        url: '/messages',
        template: '<dashboard-messages></dashboard-messages>'
    });
}

function dashboardMessagesComp() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard-messages/dashboard-messages.html',
        controllerAs: 'vm',
        controller: function () {

        }
    };
}