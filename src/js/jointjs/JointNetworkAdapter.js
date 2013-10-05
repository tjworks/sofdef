/** Export Network domain objects to Joint JSON, and vice versus  */
//@todo: main test target
;define(['adapter/NetworkAdapter','model/Network', 'model/Switch', 'jointjs/Shapes' , 'jointjs/LinkArranger'], function(NetworkAdapter,Network, Switch, Shapes, LinkArranger){
  console.log("File loaded: JointNetworkAdapater")
  var JointNetworkAdapter = function(){
    console.log("Object init: JointNetworkAdapter");
  };
  
  JointNetworkAdapter.prototype = new NetworkAdapter();
  JointNetworkAdapter.prototype.serialize = function(network, graph){
      
        //var graph = new joint.dia.Graph;
 
        
        var connect = function(source, sourcePort, target, targetPort) {
          
            if(typeof source === 'string') 
              source = graph.getCell(source);
            if(typeof target === 'string')
              target = graph.getCell(target);
          
            var link = new joint.shapes.devs.Link({
                id:  sourcePort+"~"+targetPort,
                source: { id: source.id, selector: source.getPortSelector(sourcePort) },
                target: { id: target.id, selector: target.getPortSelector(targetPort) }
            });
            graph.addCell(link);
            link.on('change', function(evt){
              //console.log("link changed", evt)
            })
            
            // move the ports if necessary
            console.log("Connected link", link)
        };
         
        var nodes = network.getNodes();
        var links = network.getLinks();
        
        for(var i=0; nodes && nodes.length>i; i++){
          var node =nodes[i];
          var nid = node.getId();
          
          var ports = [];
          var intfs = node.getInterfaces();
          for(var j=0;intfs && intfs.length>j;j++){
            var intf = intfs[j];
            ports.push(intf.getId());
          }
          var props = {id:nid, 
                       attrs: {'.label': { text: node.getId()   } }
                       };
          /**
          if(node instanceof Switch) 
            props.outPorts = ports 
          else
          */
            props.inPorts = ports
          var shape = new Shapes.devs.Atomic( props);
          graph.addCell(shape);
          
          shape.on('change:position', function(em){
            console.log("shape position changed", em);
            LinkArranger(em.id, graph)
          });
        } 
        
        //graph.addCell(c1).addCell(a1).addCell(a2).addCell(a3);
        for(var i=0;links && links.length>i;i++){
          var link = links[i];
          var linkid = link.getId();
          var p1 = link.getPair()[0];
          var p2 = link.getPair()[1];
          var node1 = p1.getNode().getId();
          var node2 = p2.getNode().getId();
          console.log("Creating link: ", link.getPair());
          connect(node1, p1.getId(), node2,p2.getId()   )
        }
        console.log("Grph is ", graph)
        
        return graph;
      //$(el).text(topoModel);
  }; // end serialize
  return JointNetworkAdapter;
  
}); // end define
