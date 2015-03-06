/**
 * Created by sbunke on 3/5/2015.
 */
(function() {
    'use strict';

    angular.module('uir').controller('RedisCtrl', RedisCtrl);

    function RedisCtrl($state) {
        var vm = this;

        vm.getInfo = getInfo;

        vm.info = 'this is some test info';


        getInfo();

        function getInfo() {
            console.log('in RedisCtrl');
        }
    }

})();