;define([  'jointjs/JointNetworkAdapter', 'jointjs/Shapes' , 'dagre'], function(    JointNetworkAdapter, Shapes, Dagre){
    console.log("File loaded:JointGraph"); 
   
   var graph = null;
   var graphEl = null;
   var networkModel = null;
   var paper = null;
   var getGraph = function(network, el){
      console.log("getGraph called with parameters", arguments.length)
      if(!network) return graph; // existing one
        
      networkModel = network 
      graphEl = el || graphEl;
      graph = new joint.dia.Graph;
      
      paper = new joint.dia.Paper({
        el: $(graphEl),
        width: 800,
        height: 600,
        gridSize: 1,
        model: graph
      });

      global.graph = graph;
      global.paper = paper;
    
     new JointNetworkAdapter().serialize(network, graph);
     joint.layout.DirectedGraph.layout(graph, { setLinkVertices: false });
     
     graph.paper = paper;
   }
    
    return {
      getGraph: getGraph,
      getCanvas: function(){
        return paper;
      }
    }
}); // end require.js define()

  