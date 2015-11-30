/**
 * Main component
 */
angular.module('app', [
        'angular-meteor',
        'ui.router'
    ])
    .directive('app', appComponent)
    .config(config);

// bootstrap angular
angular.element(document).ready(onReady);

function config($urlRouterProvider) {
    // redirect to / on invalid url
    $urlRouterProvider.otherwise('/');
}

/**
 * app component
 * @returns {Object}
 */
function appComponent() {
    return {
        restrict: 'E',
        templateUrl: 'client/app/app.html',
        controller: function () {
        }
    }
}

function onReady() {
    angular.bootstrap(document.querySelector('app'), ['app']);
}