define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkNode");
  
    var NetworkNode =  function(){
        console.log("Object init: NetworkNode");
    };
    NetworkNode.prototype = new NetworkElement();
    NetworkNode.prototype.constructor = NetworkNode;
    NetworkNode.prototype.setInterfaces = function(newInterfaces){ this.interfaces = newInterfaces};
    NetworkNode.prototype.getInterfaces = function(){ return this.interfaces};
    
    return NetworkNode;
}); // end of define

