;define([  'jointjs/JointNetworkAdapter', 'jointjs/Shapes' , 'dagre'], function(    JointNetworkAdapter, Shapes, Dagre){
  console.log("File loaded:JointGraph"); 
   
   
   var JointGraph = function(network, el){
      console.log("Object loaded: JointGraph");
      //initGraph();
      var graph = new joint.dia.Graph;

    var paper = new joint.dia.Paper({
        el: $(el),
        width: 800,
        height: 600,
        gridSize: 1,
        model: graph
    });
    
       new JointNetworkAdapter().serialize(network, graph);
       joint.layout.DirectedGraph.layout(graph, { setLinkVertices: false });
       return;
  
   }
    
  return JointGraph;
}); // end require.js define()

  