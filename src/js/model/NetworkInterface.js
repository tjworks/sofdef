define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkInterface");
  
    var NetworkInterface =  function(){
        console.log("Object init: NetworkInterface");
    };
    NetworkInterface.prototype = new NetworkElement();
    NetworkInterface.prototype.constructor = NetworkInterface;
    NetworkInterface.prototype.setNode = function(newNode){ this.node = newNode };
    NetworkInterface.prototype.getNode = function(){ return this.node };
    
    
    
    return NetworkInterface;
}); // end of define

