define(['model/NetworkNode'], function(NetworkNode){
    console.log("File loaded: NetworkNode");
  
    var Host =  function(){
        console.log("Object init: Host");
    };
    Host.prototype = new NetworkNode();
    Host.prototype.constructor = Host;
    
    return Host;
}); // end of define

