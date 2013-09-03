/** Export Network domain objects to Cytoscape JSON, and vice versus  */
//@todo: main test target
;define(['adapter/NetworkAdapter','model/Network'], function(NetworkAdapter,Network){
  var CytoscapeNetworkAdapter = function(){
    console.log("Object init: CytoscapeNetworkAdapter");
  };
  
  CytoscapeNetworkAdapter.prototype = new NetworkAdapter();
  CytoscapeNetworkAdapter.prototype.deserialize = function(topo){
      var graph = {nodes:[], edges:[]};
      var nodes = topo.getNodes();
      var links = topo.getLinks();
      for(var i in nodes){
          var n =  nodes[i];
          if(!n) continue;
          graph.nodes.push({
              data:  {
                  id: n.getId(),
                  weight:20, 
                  shape: 'rectangle'   //@todo: should it be done here?      
              }
          })
      }
      
      for (var i in links ) {
           var e =  links[i];
           graph.edges.push({
              data: {
                  id: e.getId(),
                  source: e.getPair()[0].getNode().getId(),
                  target: e.getPair()[1].getNode().getId(),
                  weight: 30
              }
          });
      }
      return graph;
  }; // end deserialize
  return CytoscapeNetworkAdapter;
  
}); // end define
