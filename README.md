# Photo Album - Angular

This is a simple Angular app, used for educational purposes.

## Set-up

1. Run ```bower install``` to install dependencies (Angular, Angular route, and Angular mocks).
2. Open index.html in your browser.

### Creating a "Hello World" Angular app

This is the barest of the bare bones for Angular.

Conceptually, these are the steps needed to create an Angular app.

1. Create an index.html file with:
  * ```<div ng-app="app"><div ng-controller="controller"></div></div>``` inside the body tag
  * Angular as the first script
  # ```<script src="app/app.js"></script>```

The ```div``` with ng-app "app" will be where the entire Angular app gets rendered. Inside this ```div```, the div with ng-controller "controller" will be under the jurisdiction of the thus-named controller inside the app module.

Unlike something like React, you can just put your application's HTML directly inside this controller ```div```. So throw in ```<p>{{ myString }}</p>``` inside it.

The app.js file will be the entry point for your Angular app.

2. Create an ```app``` folder and a file ```app.js``` inside it. Inside here, you will define an Angular module called ```app```:

```
angular.module('app', []);
```

Note that this is not the usual syntax you might expect, such as ```var app = angular.module();``` (this is NOT real Angular code!). Angular does a lot of "magic" behind the scenes, where it will internally keep track of different module and factory/service names.

Angular will automatically load this module into the ```div``` with ng-app ```app```. ```app``` is not a special name; it is simply the same name you pass as the first parameter to ```angular.module```.

3. Add a controller to the module, using chaining notation.

```
angular.module('app', [])
.controller('controller', function() {
  // code here
});
```

Again, Angular will automatically load this controller into the ```div``` with ng-controller ```controller``` (within the div with ng-app ```app```). And again, ```controller``` is not a special name; it is simply the same name you pass as the first parameter to ```.controller```.

4. Add functionality to your controller by adding whatever services you may need (built-in or written by you) and using them. The most frequently used built-in service is ```$scope```.

```
angular.module('app', [])
.controller('controller', function($scope) {
  $scope.myString = 'Hello, World!';
});
```