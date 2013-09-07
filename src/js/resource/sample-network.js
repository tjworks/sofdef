/**// returns an object represents Cytoscape graph
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

  
  
define(['model/Network', 'model/Switch',   'model/PhysicalNetworkInterface', 'model/PhysicalNetworkLink'], function(Network, Switch, PhysicalNetworkInterface,PhysicalNetworkLink){ 
  
  var ret = {
  
      nodes: [
          {uuid:'sw1', name:'s1', type:'switch', ports: [ 
                                          {uuid:'ports1p1', name:'s1p1'},
                                          {uuid:'ports1p2', name:'s1p2'}
                                      ]},
          {uuid:'sw2', name:'s2', type:'switch', ports: [ 
                                          {uuid:'ports2p1', name:'s2p1'},
                                          {uuid:'ports2p2', name:'s2p2'},
                                          {uuid:'ports2p3', name:'s2p3'}
                                      ]},
          {uuid:'sw3', name:'s3', type:'switch', ports: [ 
                                          {uuid:'ports3p1', name:'s3p1'},
                                          {uuid:'ports3p2', name:'s3p2'},
                                          {uuid:'ports3p3', name:'s3p3'}
                                      ]}
      ],
      links: [
          {uuid:'link1', name:'lk1', ports:['sw1', 'sw2']},
          {uuid:'link3', name:'lk3', ports:['sw1', 'sw2']},
          {uuid:'link4', name:'lk4', ports:['sw3', 'sw2']},
          {uuid:'link2', name:'lk2', ports:['sw1', 'sw3']}    
      ],
      hosts: [
      
          {uuid:'host1',name:'h1', ports:[
                                      {uuid:'porth1p1', name:'h1p1'}
          
          ]}
      ]
   } // end ret 
   
   var network = new Network();
  // network.setName("My Network");

   var nodes = [];
   // add switches
   for(var i=1;i<=3; i++){
      var sw = new Switch();
      sw.setId("sw"+i);
      sw.setName("sw"+i);
      //console.log(sw, "is type of NetworkElement", sw instanceof NetworkElement);
      
      var interfaces = [];
      // each switch has 4 interfaces
      for(var j=1;j<=4;j++){
        var interface = new PhysicalNetworkInterface();
        interface.setId(sw.getId()+"eth"+j);
        interface.setNode(sw);
        interfaces.push(interface);  
      }
      sw.setInterfaces(interfaces);
      nodes.push(sw);
   }
   network.setNodes(nodes);
   
   // add link 
   var links = [];  
   var link12 = new PhysicalNetworkLink();
   link12.setId("sw1-sw2");
   link12.setPair([nodes[0].getInterfaces()[0],  nodes[1].getInterfaces()[0] ]);
   links.push(link12);
   
   var link13 = new PhysicalNetworkLink();
   link13.setId("sw1-sw3");
   link13.setPair([nodes[0].getInterfaces()[1],  nodes[2].getInterfaces()[0] ]);
   links.push(link13);
   
   network.setLinks(links);
   
   ret.network= network;
   ret.graph =toCytoscapeGraphModel(ret);
   return ret;
   
}); // end define 
  */