define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkInterface");
  
    var NetworkInterface =  NetworkElement.extend({
      initialize:function(){
        console.log("Object init: NetworkInterface");
      },
      setNode: function(newNode){ this.node = newNode },
      getNode: function(){ return this.node }
     });
    
     return NetworkInterface;
}); // end of define

