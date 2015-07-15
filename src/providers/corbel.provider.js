(function(corbel){

  'use strict';

  /**
   * @name angular-corbel.corbelProvier
   * @description
   * Provider to configure and get Corbel Driver.
   */
  angular.module('angular-corbel')
      .provider('corbel', corbelProvider);

  /* @ngInject */
  function corbelProvider() {

      var provider = this;

      /**
       * Sets the Corbel Driver configuration.
       * @see https://github.com/bq/corbel-js
       * @param  {Object} config    Configuration object
       */
      provider.setConfig = function(config) {
        provider.config = config;
      };



      provider.$get = function() {
          if(!corbel){
            throw Error('window.corbel is not defined. Did you forget to load corbel-js script in your index.html?');
          }
          return corbel.getDriver(provider.config);
      };

  }
})(window.corbel);
