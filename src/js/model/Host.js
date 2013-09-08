define(['model/NetworkNode'], function(NetworkNode){
    console.log("File loaded: NetworkNode");
  
    var Host =  NetworkNode.extend({
      initialize: function(){
        console.log("Object init: Host");
      }
    }); //end extend
    return Host;
}); // end of define

