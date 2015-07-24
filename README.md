# corbel-js wrapper for Angular #

[![Build Status](https://travis-ci.org/corbel-platform/angular-corbel.svg?branch=master)](https://travis-ci.org/corbel-platform/angular-corbel)
[![Bower version](https://badge.fury.io/bo/angular-corbel.svg)](http://badge.fury.io/bo/angular-corbel)
[![Dependency Status](https://david-dm.org/corbel-platform/angular-corbel.svg)](https://david-dm.org/corbel-platform/angular-corbel)
[![devDependency Status](https://david-dm.org/corbel-platform/angular-corbel/dev-status.svg)](https://david-dm.org/corbel-platform/angular-corbel#info=devDependencies)

## Usage ##

```
var app = angular.module('myApp', ['angular-corbel']);

// Use corbelProvider to configure the Driver
app.config(function(corbelProvider){
  corbelProvider.setConfig({
    'clientId': 'clientId',
    'clientSecret': 'clientSecret',

    'urlBase': 'http://localhost:8080/{{module}}',

    'scopes': 'scopes'
    });
});


// Inject the corbel driver
app.controller('myCtrl', ['corbel', function(corbel) {
    //use corbel here!
});
```
