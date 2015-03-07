/**
 * Created by sbunke on 3/5/2015.
 */
(function() {
    'use strict';
    var app = angular.module('uir', [
       'ui.bootstrap',
        'ui.router'
    ]);



    app.config(['$stateProvider', '$urlRouterProvider', configRoutes ]);


    function configRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                url: '/',
                //abstract: true,
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm'
            })
            .state('main.redis', {
                url: '/redis',
                views: {
                    'tabContent': {
                        templateUrl: 'app/redis/redis.html',
                        controller: 'RedisCtrl',
                        controllerAs: 'vm'

                    }
                }
            })
            .state('main.sql', {
                url: '/sql',
                views: {
                    'tabContent': {
                        templateUrl: 'app/sql/sql.html',
                        controller: 'SqlCtrl',
                        controllerAs: 'vm'

                    }
                }
            })
            .state('main.tables', {
                url: '/tables',
                views: {
                    'tabContent': {
                        templateUrl: 'app/tables/tables.html',
                        controller: 'TablesCtrl',
                        controllerAs: 'vm'

                    }
                }
            })


        $urlRouterProvider.otherwise('/');

        app.run(['$state', 'stateWatcherService', function($state, stateWatcherService) {

        }]);

    };




})();