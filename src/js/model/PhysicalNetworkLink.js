define(['model/NetworkLink'], function(NetworkLink){
    console.log("File loaded: PhysicalNetworkLink");
  
    var PhysicalNetworkLink =  function(){
        console.log("Object init: PhysicalNetworkLink");
    };
    PhysicalNetworkLink.prototype = new NetworkLink();
    PhysicalNetworkLink.prototype.constructor = PhysicalNetworkLink;
    
    return PhysicalNetworkLink;
}); // end of define

