/**
 * Created by sbunke on 3/5/2015.
 */
(function() {
    'use strict';

    angular.module('uir').controller('TablesCtrl', TablesCtrl);

    function TablesCtrl($state) {
        var vm = this;

        vm.getInfo = getInfo;

        vm.info = 'this is some test info';


        getInfo();

        function getInfo() {
            console.log('in TablesCtrl');
        }
    }

})();