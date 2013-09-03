define(['jquery', 'cyto', 'resource/sample-network'], function($, cyto, sampleNet){
  console.log("File loaded: Example");
  
  // returns an object represents Cytoscape graph
  var toCytoscapeGraphModel = function(topo) {
  
      var graph = {nodes:[], edges:[]};
      for(var i in topo.nodes){
          var n = topo.nodes[i];
          if(!n) continue;
          graph.nodes.push({
              data:  {
                  id: n.uuid,
                  weight:20, 
                  shape: 'switch' == n.type? 'rectangle': 'circle'     
              }
          })
      }
      
      for (var i in topo.links ) {
           var e = topo.links[i];
           graph.edges.push({
              data: {
                  id: e.uuid,
                  source: e.ports[0],
                  target: e.ports[1],
                  weight: 30
              }
          });
      }
  
      return graph;
  } // end toCytoscapeGraphModel

  
   
$(function(){

  console.log("Init cytoscape");
     topoModel = toCytoscapeGraphModel(sampleNet);
     
    var nodeCount = 10;
    var edgeCount = 12;

    var demoNodes = [];
    var demoEdges = [];
    
  $('#demo').cytoscape({
    elements: topoModel,
    // TODO specify a nice style like http://cytoscapeweb.cytoscape.org/demos/simple
    style: cytoscape.stylesheet()
      .selector("node")
            .css({
                "content": "data(id)",
                "shape": "data(shape)",
                "border-width": 3,
                "background-color": "#DDD",
                "border-color": "#555"
            })
        .selector("edge")
            .css({
                "width": "mapData(weight, 0, 100, 1, 4)",
                "target-arrow-shape": "circle",
                "source-arrow-shape": "circle",
                "line-color": "#444"
            })
        .selector(":selected")
            .css({
                "background-color": "#000",
                "line-color": "#000",
                "source-arrow-color": "#000",
                "target-arrow-color": "#000"
            })
        .selector(".ui-cytoscape-edgehandles-source")
            .css({
                "border-color": "#5CC2ED",
                "border-width": 3
            })
        .selector(".ui-cytoscape-edgehandles-target, node.ui-cytoscape-edgehandles-preview")
            .css({
                "background-color": "#5CC2ED"
            })
        .selector("edge.ui-cytoscape-edgehandles-preview")
            .css({
                "line-color": "#5CC2ED"
            })
        .selector("node.ui-cytoscape-edgehandles-preview, node.intermediate")
            .css({
                "shape": "rectangle",
                "width": 15,
                "height": 15
            })
    ,

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
