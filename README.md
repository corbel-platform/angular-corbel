# corbel-js wrapper for Angular #

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
