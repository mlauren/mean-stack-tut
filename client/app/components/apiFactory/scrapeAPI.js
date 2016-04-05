(function() {
  'use strict';

  angular
    .module("app")
    .factory("scrapeAPI", scrapeAPI); // define factory

  scrapeAPI.$inject = ['$http'];

  function scrapeAPI($http) {
    return {
      getScrapeDetails: getScrapeDetails, 
    }
    function getScrapeDetails(link) {
      return $http.post('/api/links/scrape', link);
    }
  }

})();