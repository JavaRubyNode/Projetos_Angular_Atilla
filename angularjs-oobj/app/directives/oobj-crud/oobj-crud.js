/**
 * Created by ATILLA on 19/08/2015.
 */
angular.module('oobj-directives')
    .directive('oobjCrud', textInput);

textInput.$inject = ['$rootScope'];

function textInput($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/oobj-crud/oobj-crud.html',
        transclude: true,
        scope: {
            titulo: '@',
            acaoSalvar: '&',
            acaoExcluir: '&',
            acaoLimpar: '&'
        },
        link: function($scope, element, attrs) {
            $scope.salvar = function() {
                if (angular.isFunction($scope.acaoSalvar)) {
                    $scope.acaoSalvar();
                }

                $scope.$emit('salvar');
            };

            $scope.excluir = function() {
                if (angular.isFunction($scope.acaoExcluir)) {
                    $scope.acaoExcluir();
                }

                $scope.$emit('excluir');
            };

            $scope.limpar = function() {
                if (angular.isFunction($scope.acaoLimpar)) {
                    $scope.acaoLimpar();
                }

                $scope.$emit('limpar');
            };
        }
    };
}