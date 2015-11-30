angular.module('app')
    .directive('dashboardNav', dashboardNavComp);

function dashboardNavComp() {
    return {
        restrict: 'E',
        templateUrl: 'client/dashboard-nav/dashboard-nav.html',
        controllerAs: 'vm',
        controller: function ($state) {
            const vm = this;

            vm.isActive = (stateName) => {
                return $state.includes(stateName);
            };
        }
    };
}