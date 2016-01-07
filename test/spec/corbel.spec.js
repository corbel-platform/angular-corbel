'use strict';

describe('angular-corbel', function() {

  var provider,
    service;

  // load module
  beforeEach(function() {
    // Initialize the service provider
    // by injecting it to a fake module's config block
    angular.module('test.module', [])
      .config(function(corbelDriverProvider) {
        provider = corbelDriverProvider;
      });
    // Initialize test.app injector
    module('angular-corbel', 'test.module');

    // Kickstart the injectors previously registered
    // with calls to angular.mock.module
    inject(function(corbel) {
      service = corbel;
    });
  });

  it('can return a corbel service', function() {
    expect(service).not.toBeUndefined();
  });

  describe('in corbelDriver provider with custom configuration', function() {
    it('returns a configured instance of the Corbel Driver', function() {
      // check sanity
      expect(provider).not.toBeUndefined();
      // configure the provider
      provider.setConfig({
        'clientId': 'clientId',
        'urlBase': 'http://localhost'
      });
      // test an instance of the provider for
      // the custom configuration changes
      expect(provider.$get().iam).not.toBeUndefined();
    });
  });

});
