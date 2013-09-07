
define(['jquery',  'resource/tree-network', 'mininet/MininetNetworkAdapter'], function($,  sampleMininet, MininetNetworkAdapter){
  console.log("File loaded: NetworkFactory");
  var NetworkFactory = {} 
  
  NetworkFactory.loadSampleNetwork = function(path){
      return sampleNetwork.network; 
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
 

