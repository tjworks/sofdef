define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkNode");
  
    var NetworkNode =  function(){
        console.log("Object init: NetworkNode");
    };
    NetworkNode.prototype = new NetworkElement();
    NetworkNode.prototype.constructor = NetworkNode;
    
    return NetworkNode;
}); // end of define

