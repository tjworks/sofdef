/** Export Network domain objects to Joint JSON, and vice versus  */
//@todo: main test target
;define(['adapter/NetworkAdapter','model/Network', 'model/Switch'], function(NetworkAdapter,Network, Switch){
  console.log("File loaded: JointNetworkAdapater")
  var JointNetworkAdapter = function(){
    console.log("Object init: JointNetworkAdapter");
  };
  
  JointNetworkAdapter.prototype = new NetworkAdapter();
  JointNetworkAdapter.prototype.serialize = function(network){
      // testing:
      var topoModel =  null;// sampleNet.graph;
      
      var graphModel = new joint.dia.Graph;
      
      var nodes = network.getNodes();
      var links = network.getLinks();
      for(var i in nodes){
          var node =  nodes[i];
          if(!node) continue;
          
          var shape = null;
          if(node instanceof Switch )
              shape = new joint.shapes.basic.Rect
          else
              shape = new joint.shapes.basic.Circle
          graphModel.add(shape);
      }
      
      var rect = new joint.shapes.basic.Rect({
          position: { x: 100, y: 30 },
          size: { width: 100, height: 30 },
                  attrs: { rect: {  }, text: { text: 'my box', fill: 'blue' } }
        });
        
        var rect2 = rect.clone();
        rect2.translate(300);
        
        var link = new joint.dia.Link({
            source: { id: rect.id },
            target: { id: rect2.id }
        });
        
        return graphModel;
      //$(el).text(topoModel);
  }; // end deserialize
  return JointNetworkAdapter;
  
}); // end define
