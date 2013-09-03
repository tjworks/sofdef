define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkLink");
  
    var NetworkLink =  function(){
        console.log("Object init: NetworkLink");
    };
    NetworkLink.prototype = new NetworkElement();
    NetworkLink.prototype.constructor = NetworkLink;
    NetworkLink.prototype.setPair = function(pair){
      this.pair = pair;
    };
    NetworkLink.prototype.getPair = function(){ return this.pair};
    
    
    return NetworkLink;
}); // end of define

