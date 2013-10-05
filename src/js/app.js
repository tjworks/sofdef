'use strict'; 

require.config({
   baseUrl: 'js',
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: '../../modules/jquery-1.10.2.min',
    underscore: '../../modules/underscore-1.5.1',
    backbone: '../../modules/backbone',
    cyto: '../../modules/cytoscape/build/cytoscape',
    joint:'../../modules/joint.nojquerynobackbone',
    dagre:'../../modules/joint.dagre'
  }
});
require(['control/SampleController', 'control/HomeController'], function(SampleCtrl, HomeCtrl){
  
   console.log("File loaded: app.js");
    
    var sofdef = angular.module('sofdef', ['ngRoute'] ).config(['$routeProvider', function($routeProvider) {
      $routeProvider.
          when('/', {templateUrl: 'html/home.html',   controller: HomeCtrl}).
          when('/sample-network', {templateUrl: 'main.html',   controller: SampleCtrl}).
          when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: HomeCtrl}).
          otherwise({redirectTo: '/'});
    }])  ;

    angular.bootstrap(document, ['sofdef']);
    console.log("Bootstrap complete");    
    
    
});
  
  var global = {} 