define(['jquery', 'cyto', 'resource/sample-network', 'cy/Stylesheet'], function($, cyto, sampleNet, styleSheet){
  console.log("File loaded: Example"); 
   
$(function(){

  console.log("Init cytoscape");
     topoModel =  sampleNet.graph;
     
    var nodeCount = 10;
    var edgeCount = 12;

    var demoNodes = [];
    var demoEdges = [];
    
  $('#demo').cytoscape({
    elements: topoModel,
    // TODO specify a nice style like http://cytoscapeweb.cytoscape.org/demos/simple
    style: styleSheet,

    ready: function(){
      window.cy = this; // for debugging
      
        var nodeCount = cy.nodes().length;
        for (var i = 0; i < nodeCount; i++) {
            
            var center = [cy.container().clientWidth / 2, cy.container().clientHeight / 2];
            
            var angle = i / nodeCount * Math.PI * 2;
//          console.log(angle);
            var radius = 
                Math.min(cy.container().clientWidth, cy.container().clientHeight) / 2 * 0.6;
//          console.log(radius);
            
            var nodePos = [Math.cos(angle) * radius + center[0], Math.sin(angle) * radius + center[1]]
//          console.log(nodePos);
            cy.nodes()[i].position({x: nodePos[0], y : nodePos[1]});
        }
    }
    
  });
  
});
   
  return {};
}); // end require.js define()
