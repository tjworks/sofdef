define(['model/NetworkInterface'], function(NetworkInterface){
    console.log("File loaded: PhysicalNetworkInterface");
  
    var PhysicalNetworkInterface = NetworkInterface.extend({
        initialize: function(){
          console.log("Object init: PhysicalNetworkInterface");
        }
    }); // end extend
    
    return PhysicalNetworkInterface;
}); // end of define

