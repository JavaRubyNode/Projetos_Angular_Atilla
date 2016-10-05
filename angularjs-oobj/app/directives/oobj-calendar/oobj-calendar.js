/**
 * Created by ATILLA on 18/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjCalendar', calendar);

calendar.$inject = ['$rootScope'];

function calendar($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/oobj-calendar/oobj-calendar.html',
        scope: {
            label: '@',
            ngModel: '=',
            colspan: '@'
        },
        link: function($scope, element, attrs) {
            $scope.classCalendar = 'col-sm-' + $scope.colspan;
        }
    };
}