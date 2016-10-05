/**
 * Created by ATILLA on 18/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjSelect', select);

select.$inject = ['$rootScope'];

function select($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/oobj-select/oobj-select.html',
        scope: {
            label: '@',
            ngModel: '=',
            colspan: '@',
            itens: '=',
            itemLabel: '@'
        },
        link: function($scope, element, attrs) {
            $scope.classSelect = 'col-sm-3';

            if (angular.isDefined($scope.colspan)) {
                $scope.classSelect = 'col-sm-' + $scope.colspan;
            }
        }
    };
}