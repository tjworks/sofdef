define(['model/NetworkNode'], function(NetworkNode){
    console.log("File loaded: NetworkNode");
  
    var Switch =  function(){
        console.log("Object init: Switch");
    };
    Switch.prototype = new NetworkNode();
    Switch.prototype.constructor = Switch;
    return Switch;
}); // end of define

