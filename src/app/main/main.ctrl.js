/**
 * Created by sbunke on 3/5/2015.
 */
(function() {
   'use strict';

    angular.module('uir').controller('MainCtrl', MainCtrl);

    function MainCtrl($state) {
        var vm = this;

        vm.getInfo = getInfo;

        vm.info = 'this is some test info';

        vm.tabs = [
            { text: 'Redis', state: 'main.redis' },
            { text: 'SQL', state: 'main.sql' },
            { text: 'Azure Tables', state: 'main.tables' }
        ];

        //$state.go('main.redis');

        getInfo();

        function getInfo() {
            console.log('in MainCtrl');
        }

        activate();

        function activate() {
            _.each(vm.tabs, function (tab) {
                tab.active = ($state.current.name === tab.state);
            });
        }
    }

})();