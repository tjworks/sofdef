
define(['jquery',  'resource/tree-network', 'mininet/MininetNetworkAdapter', 'resource/singleswitch-network'], function($,  sampleMininet, MininetNetworkAdapter, simpleMininet){
  console.log("File loaded: NetworkFactory");
  var NetworkFactory = {} 
  
  
  NetworkFactory.loadSimpleMininet= function(path){
     return new MininetNetworkAdapter().deserialize(simpleMininet)
  };
  NetworkFactory.loadSampleMininet = function(){
     return new MininetNetworkAdapter().deserialize(sampleMininet)
  };
  NetworkFactory.loadNetwork = function(url, callback){
    
      var jsonHandler = function(data){
          console.log("JSONP results", data);
          
          // convert JSON to network
          var network = new MininetNetworkAdapter().deserialize(data)
          callback && callback(network);
      }
    
      $.ajax({
          dataType:"jsonp",
          url:url,
          success: jsonHandler
      })
     return new MininetNetworkAdapter().deserialize(sampleMininet)
  };
  NetworkFactory.createFromJson = function(json, serializer) {
      serializer = serializer || this.JsonSerializer;
      return serializer.deserialize(json);
  };
  NetworkFactory.JsonSerializer = {
    serialize: function(network){
      
      return '';
    },
    deserialize: function(json){
      return null; // Network
    }
  }
  
  return NetworkFactory;
  
}) 
 

