define(['model/Network', 'model/Switch'], function(Network, Switch){ 
  
  
  
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
   network.setName("My Network");

   // add switches
   for(var i=1;i<=3; i++){
      var sw = new Switch();
      sw.setName("sw"+i);
   }


   
   ret.network= network;
   return ret;
   
}); // end define 
  