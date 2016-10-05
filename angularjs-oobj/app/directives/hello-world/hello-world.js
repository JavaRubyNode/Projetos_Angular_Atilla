/**
 * Created by ATILLA on 18/08/2015.
 */
angular.module('oobj-directives')

    .directive('helloWorld', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/hello-world/hello-world.html'
    };
});