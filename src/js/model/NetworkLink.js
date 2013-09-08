define(['model/NetworkElement'], function(NetworkElement){
    console.log("File loaded: NetworkLink");
  
    var NetworkLink = NetworkElement.extend({ 
      initialize: function(){
        console.log("Object init: NetworkLink");
      },
      setPair:  function(pair){
          this.pair = pair;
      },
      getPair: function(){ return this.pair}
    }); // end extend
    
    
    return NetworkLink;
}); // end of define

