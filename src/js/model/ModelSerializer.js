/** Sample serializer utilizing JSON */
define([], function(){
   console.log("File loaded: ModelSerializer");
   {
    serialize: function(network){
      return JSON.stringify(network);
    },
    deserialize: function(json){
      return JSON.parse(json);
    }
  }
  
  return NetworkFactory;
  
}) 
 