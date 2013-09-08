define(['model/NetworkLink'], function(NetworkLink){
    console.log("File loaded: PhysicalNetworkLink");
  
    var PhysicalNetworkLink = NetworkLink.extend({
        initialize: function(){
          console.log("Object init: PhysicalNetworkLink");
        }  
    });
    return PhysicalNetworkLink;
}); // end of define

