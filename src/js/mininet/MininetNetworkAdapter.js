/** Export Network domain objects to Mininet JSON, and vice versus  */
//@todo: main test target
;define(['adapter/NetworkAdapter','model/Network', 'model/Switch', 'model/Host','model/PhysicalNetworkLink','model/PhysicalNetworkInterface'], 
  function(NetworkAdapter,Network, Switch, Host, PhysicalNetworkLink, PhysicalNetworkInterface){
  
  
  var MininetNetworkAdapter = function(){
    console.log("Object init: MininetNetworkAdapter");
  };
  
  MininetNetworkAdapter.prototype = new NetworkAdapter();
  MininetNetworkAdapter.prototype.deserialize = function(mininet){
      console.log("Network is ", Network);
       var network = new Network();
       network.setName("Mininet Network");
    
       var interface_lookup = {};
       var nodes = [];
       // add switches
       for(var i=0; mininet.nodes && mininet.nodes.length>i; i++){
         var rawnode = mininet.nodes[i];
         if(!rawnode) continue;
         
         var node;
         if('host' == rawnode.group)
            node = new Host();
         else
            node = new Switch();
            
         var nid = rawnode.id;
         var matcher  = /^0+([1-9]\d*)$/.exec(nid);  // remove the leading 0s which don't show nicely on diagram
         if(matcher)
            nid ="sw"+ matcher[1];
         node.setId(nid);
         node.setName(rawnode.name || rawnode.id)
         
         var interfaces = [];
         for(var j=0;  rawnode.interfaces && rawnode.interfaces.length>j; j++){
            var rawint = rawnode.interfaces[j];
            var interface = new PhysicalNetworkInterface();
            interface.setId( rawint.id);
            interface.setNode(node);
            
            interfaces.push(interface);  
            interface_lookup[rawint.id] = interface;
          } // end for j
          
          node.setInterfaces(interfaces);
          nodes.push(node);
       } // end for i
       network.setNodes(nodes);
       
       // add link 
       var links = [];  
       for(var i=0; mininet.links && mininet.links.length>i;i++){
         var rawlink = mininet.links[i];
         var link = new PhysicalNetworkLink();
         link.setId(rawlink.id);
         link.setName(rawlink.name || rawlink.id);
         
         var pair = [];
         link.setPair(pair);
         pair[0] = interface_lookup[rawlink.intf1];
         pair[1] = interface_lookup[rawlink.intf2];
         
         if(pair[0] && pair[1])
            links.push(link)
         else
            console.error("Invalid link data" , rawlink);
       }
         
       network.setLinks(links);
       
       return network;
  }; // end serialize
  return MininetNetworkAdapter;
  
}); // end define
