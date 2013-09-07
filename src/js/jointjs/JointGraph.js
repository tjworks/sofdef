define([  'jointjs/JointNetworkAdapter' ], function(    JointNetworkAdapter){
  console.log("File loaded:JointGraph"); 
   
   
   var JointGraph = function(network, el){
      console.log("Object loaded: JointGraph");
     
      // testing:
      var topoModel =  null;// sampleNet.graph;
      //topoModel =  new JointNetworkAdapter().serialize(network);
      //console.log("After deserialize: ", topoModel);
      
      var graph = new joint.dia.Graph;
      var paper = new joint.dia.Paper({
          el:$(el),
          model:graph
      })
      var rect = new joint.shapes.basic.Rect({
          position: { x: 100, y: 30 },
          size: {  },
                  attrs: { rect: {  }, text: { text: 'my box', fill: 'blue' } }
        });
        
        var rect2 = rect.clone();
        rect2.translate(300);
        
        var link = new joint.dia.Link({
            source: { id: rect.id },
            target: { id: rect2.id }
        });
        
        graph.addCells([rect, rect2, link]);    
      //$(el).text(topoModel);
      
   }
    
  return JointGraph;
}); // end require.js define()

 