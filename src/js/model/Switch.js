define(['model/NetworkNode'], function(NetworkNode){
    console.log("File loaded: NetworkNode");
  
    var Switch =  NetworkNode.extend({
      initialize: function(){
        console.log("Object init: Switch");
      }
    }); // end extend
    return Switch;
}); // end of define

