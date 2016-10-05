/**
 * Created by ATILLA on 10/08/2015.
 */
angular.module('bootstrapApp', ['ngMessages',
                                'ngMaterial',
                                'ui.router',
                                'ui.growl',
                                'ui.grid',
                                'ui.grid.resizeColumns',
                                'ui.grid.selection',
                                'oc.lazyLoad',
                                'oobj-directives'])
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];

function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('green').primaryPalette('green');

    var home = {
        url: '/',
        templateUrl: 'app/views/home.html'
    };

    var produto = {
        abstract: true,
        url: '/produto',
        template: '<ui-view/>'
    };

    var produtoPesquisa = {
        url: '/pesquisa',
        templateUrl: 'app/views/produto/pesquisa-produto.html',
        resolve: {
            deps: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'app/views/produto/pesquisa-produto-controller.js'
                    ]
                });
            }
        }
    };

    var produtoCadastro = {
        url: '/cadastro/:id',
        templateUrl: 'app/views/produto/cadastro-produto.html',
        resolve: {
            deps: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'app/views/produto/cadastro-produto-controller.js'
                    ]
                });
            }
        }
    };

    var pessoa = {
        abstract: true,
        url: '/pessoa',
        template: '<ui-view/>'
    };

    var pessoaPesquisa = {
        url: '/pesquisa',
        templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
        resolve: {
        deps: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                files: [
                    'app/views/pessoa/pesquisa-pessoa-controller.js'
                ]
            });
        }
    }
    };

    var pessoaCadastro = {
        url: '/cadastro',
        templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
        resolve: {
            deps: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'app/views/pessoa/cadastro-pessoa-controller.js'
                    ]
                });
            }
        }
    };

    $stateProvider
        .state('home', home)
        .state('produto', produto)
        .state('produto.cadastro', produtoCadastro)
        .state('produto.pesquisa', produtoPesquisa)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', pessoaCadastro)
        .state('pessoa.pesquisa', pessoaPesquisa);

    $urlRouterProvider.otherwise('/home');
}
