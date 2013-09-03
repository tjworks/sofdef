/** Sample serializer utilizing JSON */
define([], function(){
   console.log("File loaded: NetworkAdapter");
   
   var NetworkAdapter = function(){ 
     this.serialize = function(network){
        return JSON.stringify(network);
      };
     this.deserialize = function(json){
        return JSON.parse(json);
      }
   }; // end function
  
  
  return NetworkAdapter;
  
}) 
 