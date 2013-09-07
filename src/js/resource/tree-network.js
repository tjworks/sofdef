;define([], function(){  
  
  return {
        "nodes": [
          {
            "interfaces": [
              {
                "ip": "10.0.0.1", 
                "mac": "26:31:0f:04:fb:c5", 
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
                "mac": "02:c9:e4:46:10:9c", 
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
                "ip": "10.0.0.3", 
                "mac": "12:d1:a1:20:0b:2f", 
                "prefix": "8", 
                "name": "h3-eth0", 
                "id": "h3-eth0"
              }
            ], 
            "group": "host", 
            "id": "h3"
          }, 
          {
            "interfaces": [
              {
                "ip": "10.0.0.4", 
                "mac": "0a:c0:fb:49:99:28", 
                "prefix": "8", 
                "name": "h4-eth0", 
                "id": "h4-eth0"
              }
            ], 
            "group": "host", 
            "id": "h4"
          }, 
          {
            "interfaces": [
              {
                "ip": null, 
                "mac": "02:3a:3d:09:a4:7c", 
                "prefix": null, 
                "name": "s1-eth1", 
                "id": "s1-eth1"
              }, 
              {
                "ip": null, 
                "mac": "da:1b:96:cd:01:95", 
                "prefix": null, 
                "name": "s1-eth2", 
                "id": "s1-eth2"
              }
            ], 
            "group": "switch", 
            "id": "0000000000000001"
          }, 
          {
            "interfaces": [
              {
                "ip": null, 
                "mac": "12:2c:f4:9b:27:17", 
                "prefix": null, 
                "name": "s2-eth1", 
                "id": "s2-eth1"
              }, 
              {
                "ip": null, 
                "mac": "42:20:a0:a6:ee:5b", 
                "prefix": null, 
                "name": "s2-eth2", 
                "id": "s2-eth2"
              }, 
              {
                "ip": null, 
                "mac": "72:ef:d1:98:9b:8a", 
                "prefix": null, 
                "name": "s2-eth3", 
                "id": "s2-eth3"
              }
            ], 
            "group": "switch", 
            "id": "0000000000000002"
          }, 
          {
            "interfaces": [
              {
                "ip": null, 
                "mac": "da:06:97:47:95:fb", 
                "prefix": null, 
                "name": "s3-eth1", 
                "id": "s3-eth1"
              }, 
              {
                "ip": null, 
                "mac": "fa:1f:9b:14:88:70", 
                "prefix": null, 
                "name": "s3-eth2", 
                "id": "s3-eth2"
              }, 
              {
                "ip": null, 
                "mac": "9a:76:7d:4f:7d:74", 
                "prefix": null, 
                "name": "s3-eth3", 
                "id": "s3-eth3"
              }
            ], 
            "group": "switch", 
            "id": "0000000000000003"
          }
        ], 
        "links": [
          {
            "intf1": "h2-eth0", 
            "intf2": "s2-eth2", 
            "name": "h2-eth0s2-eth2", 
            "node1": "h2", 
            "node2": "s2", 
            "id": "h2-eth0s2-eth2"
          }, 
          {
            "intf1": "s1-eth2", 
            "intf2": "s3-eth3", 
            "name": "s1-eth2s3-eth3", 
            "node1": "s1", 
            "node2": "s3", 
            "id": "s1-eth2s3-eth3"
          }, 
          {
            "intf1": "h4-eth0", 
            "intf2": "s3-eth2", 
            "name": "h4-eth0s3-eth2", 
            "node1": "h4", 
            "node2": "s3", 
            "id": "h4-eth0s3-eth2"
          }, 
          {
            "intf1": "h3-eth0", 
            "intf2": "s3-eth1", 
            "name": "h3-eth0s3-eth1", 
            "node1": "h3", 
            "node2": "s3", 
            "id": "h3-eth0s3-eth1"
          }, 
          {
            "intf1": "s1-eth1", 
            "intf2": "s2-eth3", 
            "name": "s1-eth1s2-eth3", 
            "node1": "s1", 
            "node2": "s2", 
            "id": "s1-eth1s2-eth3"
          }, 
          {
            "intf1": "h1-eth0", 
            "intf2": "s2-eth1", 
            "name": "h1-eth0s2-eth1", 
            "node1": "h1", 
            "node2": "s2", 
            "id": "h1-eth0s2-eth1"
          }
        ]
      }

}); // end define