/**
 * Created by ATILLA on 11/08/2015.
 */
angular.module('bootstrapApp')
        .controller('BootstrapCtrl', BootstrapCtrl);

BootstrapCtrl.$inject = ['$scope', '$growl', '$rootScope', '$state'];

function BootstrapCtrl($scope, $growl, $rootScope, $state) {

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromParams) {
            console.log(toState);
        }
    );

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromParams) {
            console.log('event changed!');
        }
    );

    $rootScope.$on('$stateNotFound',
        function (event, unfoundState, toParams, fromParams) {
            $state.go("home");
        }
    );

    $scope.pessoa = {};
    $scope.pessoa.nome = '';
    $scope.pessoa.sobrenome = '';
    $scope.pessoa.dataNascimento = '';
    $scope.pessoa.sexo = '';
    $scope.pessoa.cor = '';

    $scope.pessoas = [];

    $scope.gridItemClick = function(row, col, colIndex) {
    };

    $scope.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            { name: 'Nome', field: 'nome', cellTemplate: 'cellTamplate.html' },
            { name: 'Sobrenome', field: 'sobrenome', cellTemplate: 'cellTamplate.html' },
            { name: 'Data de Nascimento', cellTemplate: 'cellTamplateData.html' },
            { name: 'Sexo', field: 'sexo', cellTemplate: 'cellTamplate.html' },
            { name: 'Ações', cellTemplate: 'cellTamplateButton.html' }
        ],
        enableRowSelection: true,
        enableColumnMenus: false,
        rowTemplate: 'rowTamplateStyle.html'
    };

    $scope.getRowStyle = function(row) {
        var rowStyle = {};
        if (angular.isDefined(row.entity.cor)) {
            rowStyle.backgroundColor = row.entity.cor;
        }
        return rowStyle;
    };

    $scope.salvar = function() {
        if ($scope.myForm.$invalid) {
            $growl.box('Erro', 'Verifique se todos os campos do formulário foram preenchidos corretamente.', {
                class: 'danger',
                timeout: 4000
            }).open();
            return;
        }

        var index = $scope.pessoas.indexOf($scope.pessoa);
        if (index < 0) {
            $scope.pessoas.push($scope.pessoa);
        } else {
            $scope.pessoas[index] = $scope.pessoa;
        }

        $scope.limpar();
    };

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
        $scope.limpar();
    };

    $scope.excluirPessoa = function(pessoa) {
        $scope.pessoas.splice($scope.pessoas.indexOf(pessoa), 1);
        $scope.limpar();
    };

    $scope.limpar = function() {
        $scope.pessoa = {};
        $scope.myForm.$pristine = true;
    };

    $scope.editar = function(pessoa) {
        $scope.pessoa = pessoa;
    };
}