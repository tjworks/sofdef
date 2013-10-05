define([ ], function( ){
  console.log("File loaded: SampleController"); 
   
  return function($scope){
    console.log("in SampleCtrl function");
    $scope.name  = 'TJ Works';
    
    require(['jquery', 'underscore', 'cyto',  'model/NetworkFactory', 'cy/CytoscapeGraph', 'backbone', 'joint' , 'jointjs/JointGraph', 'jointjs/JointExample', 'dagre' ], 
                                function(jq, underscore, cyto,   factory, CytoscapeGraph , backbone, jointjs, JointGraph, JointExampleGraph, dagre){
                                  
      console.log("dependency loaded",$, jointjs, backbone );
      console.log("factory", factory);
    
      //var network = factory.loadSampleNetwork();
      //var network = factory.loadSampleMininet();
      //console.log("Sample mininet", network);
      var network = factory.loadSimpleMininet();
      var jointGraph =  JointGraph.getGraph(network, "#cytoframe");
      console.log("###########", jointGraph)
      
      /**
      factory.loadNetwork("http://of:8080/apiv1/network/all", function(network){
          console.log("Network model loaded", network)
          
          // switching visualization library is done here: either Cytoscape or JointJS
          //var graph = new CytoscapeGraph(network, "#cytoframe");
          // var jointGraph = new JointGraph(network, "#cytoframe");
           
      });
      */
     
     
      require(['doodle']);
      } // end function
    );
  }; // end return
  
  
  
}); // end require.js define()
