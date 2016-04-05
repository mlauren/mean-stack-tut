(function() {

  'use strict';

  angular
    .module('app')
    .controller('MyLooksCtrl', MyLooksCtrl);

  MyLooksCtrl.$inject = ['$scope', '$modal', '$state', '$alert', 'looksAPI', 'Auth'];

  function MyLooksCtrl($scope, $modal, $state, $alert, looksAPI, Auth) {
    $scope.user = Auth.getCurrentUser();

    var userEmail = $scope.user.email;

  }


})();