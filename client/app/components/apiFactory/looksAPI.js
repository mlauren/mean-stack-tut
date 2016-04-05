(function() {
  'use strict';

  angular
    .module('app')
    .factory('looksAPI', looksAPI);

    looksAPI.$inject = ['$http'];

    function looksAPI($http) {
      return {
        createScrapeLook: createScrapeLook,
        getAllLooks: getAllLooks,
        findOneLook: findOneLook,
        getUpdateLook: getUpdateLook,
        updateLook: updateLook,
        deleteLook: deleteLook,
        getUserLooks: getUserLooks
      }
      function getAllLooks() {
        return $http.get('/api/look/getAllLooks', {
          cache: true
        });
      }

      function createScrapeLook(look){
        return $http.post('/api/look/scrapeUpload', look);
      }

      function getUserLooks(id) {
        return $http.get('/api/look/getUserLooks/?email=' + id, {
          cache: true
        });
      }

      function findOneLook(look) {
        return $http.get('/api/look' + look)
      }

      function getUpdateLook(look) {
        return $http.put('/api/look/' + look._id, look);
      }

      function updateLook(look) {
        return $http.put('/api/look/' + look._id);
      }

      function deleteLook(look) {
        return $http.delete('/api/look/' + look._id);
      }
    }
    
})();