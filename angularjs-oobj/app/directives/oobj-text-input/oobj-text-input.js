/**
 * Created by ATILLA on 18/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjTextInput', textInput);

textInput.$inject = ['$rootScope'];

function textInput($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/oobj-text-input/oobj-text-input.html',
        scope: {
            label: '@',
            ngModel: '=',
            ngDisabled: '=?',
            ngRequired: '=?',
            colspan: '@'
        },
        link: function($scope, element, attrs) {
            $scope.classInputText = 'col-sm-3';

            if (angular.isDefined($scope.colspan)) {
                $scope.classInputText = 'col-sm-' + $scope.colspan;
            }
        }
    };
}