/**
 * This is the main entry point for the client side interaction. 
 * This script handles:
 *    1) dependency loading
 *    2) ....
 *    3) ....
 * 
 */

console.log("File loaded: main");
require.config({
  baseUrl: 'js',
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: [
      '../../modules/jquery-1.10.2.min'
    ],
    underscore: '../../modules/underscore-1.5.1',
    cyto: [
      '../../modules/cytoscape/build/cytoscape'
    ]
  }
});

require(['jquery', 'cyto', 'model/NetworkFactory', 'Example'], function(jq, cyto, factory, example){
  console.log("jquery loaded", $);
  console.log("cyto loaded", window.cytoscape);
  console.log("factory", factory);

  var network = factory.loadNetwork();
  console.log("Loaded entwork: ", network);    
});

