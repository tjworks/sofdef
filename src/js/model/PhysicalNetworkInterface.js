define(['model/NetworkInterface'], function(NetworkInterface){
    console.log("File loaded: PhysicalNetworkInterface");
  
    var PhysicalNetworkInterface =  function(){
        console.log("Object init: PhysicalNetworkInterface");
    };
    PhysicalNetworkInterface.prototype = new NetworkInterface();
    PhysicalNetworkInterface.prototype.constructor = PhysicalNetworkInterface;
     
    
    
    return PhysicalNetworkInterface;
}); // end of define

