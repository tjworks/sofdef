
define(['resource/sample-network'], function(sampleNetwork){
  console.log("File loaded: NetworkFactory");
  var NetworkFactory = {} 
  
  NetworkFactory.loadNetwork = function(path){
      return sampleNetwork.network; 
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
 

