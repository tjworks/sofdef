define([], function(){
    console.log("File loaded: Network");
  
    var Network =  function(){
        this.name="Untitled";
    };
    Network.prototype = {
      getName: function(){ return this.name },
      setName: function(newname){ this.name= newname }
    }
    return Network;
}); // end of define

