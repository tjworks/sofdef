define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkNode");
  
    var NetworkNode =  NetworkElement.extend({
      initialize: function(){
        console.log("Object init: NetworkNode");
      },
      setInterfaces:  function(newInterfaces){ this.interfaces = newInterfaces},
      getInterfaces:  function(){ return this.interfaces}
     }); // end extend
    
    return NetworkNode;
}); // end of define

