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
    jquery: '../../modules/jquery-1.10.2.min',
    underscore: '../../modules/underscore-1.5.1',
    backbone: '../../modules/backbone',
    cyto: '../../modules/cytoscape/build/cytoscape',
    joint:'../../modules/joint.nojquery'
  }
});

require(['jquery', 'underscore', 'cyto',  'model/NetworkFactory', 'cy/CytoscapeGraph', 'backbone', 'joint' , 'jointjs/JointGraph'], 
                            function(jq, underscore, cyto,   factory, CytoscapeGraph , backbone, jointjs, JointGraph){
                              
  console.log("dependency loaded",$, jointjs, backbone );
  console.log("factory", factory);

  //var network = factory.loadSampleNetwork();
  
  //var network = factory.loadSampleMininet();
  //console.log("Sample mininet", network);
  
  factory.loadNetwork("http://of:8080/net", function(network){
      console.log("Network model loaded", network)
      //var graph = new CytoscapeGraph(network, "#cytoframe");
      
      var jointGraph = new JointGraph(network, "#cytoframe");
  });
  
});

