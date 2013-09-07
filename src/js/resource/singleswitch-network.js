;define([], function(){  
  
     return  {
      "nodes": [
        {
          "interfaces": [
            {
              "ip": "10.0.0.1", 
              "mac": "aa:b0:c2:55:0f:ba", 
              "prefix": "8", 
              "name": "h1-eth0", 
              "id": "h1-eth0"
            }
          ], 
          "group": "host", 
          "id": "h1"
        }, 
        {
          "interfaces": [
            {
              "ip": "10.0.0.2", 
              "mac": "6e:71:8f:72:33:c9", 
              "prefix": "8", 
              "name": "h2-eth0", 
              "id": "h2-eth0"
            }
          ], 
          "group": "host", 
          "id": "h2"
        }, 
        {
          "interfaces": [
            {
              "ip": null, 
              "mac": "96:11:b0:be:26:b4", 
              "prefix": null, 
              "name": "s1-eth1", 
              "id": "s1-eth1"
            }, 
            {
              "ip": null, 
              "mac": "a6:26:93:dd:21:4d", 
              "prefix": null, 
              "name": "s1-eth2", 
              "id": "s1-eth2"
            }
          ], 
          "group": "switch", 
          "id": "0000000000000001"
        }
      ], 
      "links": [
        {
          "intf1": "h2-eth0", 
          "intf2": "s1-eth2", 
          "name": "h2-eth0s1-eth2", 
          "node1": "h2", 
          "node2": "s1", 
          "id": "h2-eth0s1-eth2"
        }, 
        {
          "intf1": "h1-eth0", 
          "intf2": "s1-eth1", 
          "name": "h1-eth0s1-eth1", 
          "node1": "h1", 
          "node2": "s1", 
          "id": "h1-eth0s1-eth1"
        }
      ]
    }


}); // end define