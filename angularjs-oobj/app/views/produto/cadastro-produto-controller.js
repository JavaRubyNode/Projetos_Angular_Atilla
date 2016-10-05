/**
 * Created by ATILLA on 17/08/2015.
 */
angular.module('bootstrapApp')
    .controller('CadastroProdutoController', CadastroProdutoController);

CadastroProdutoController.$inject = ['$scope', '$stateParams'];

function CadastroProdutoController($scope, $stateParams) {

    var id = $stateParams.id;

    console.log(id);
}