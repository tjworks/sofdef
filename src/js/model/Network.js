;define([], function(){
    console.log("File loaded: Network");
  
    var Network =  function(){
        this.name="Untitled";
    };
    Network.prototype = {
      getName: function(){ return this.name },
      setName: function(newname){ this.name= newname }
    }
    Network.prototype.setNodes = function(newNodes){ this.nodes = newNodes };
    Network.prototype.getNodes = function(){ return this.nodes  };
    Network.prototype.setLinks = function(newLinks){ this.links = newLinks };
    Network.prototype.getLinks = function(){ return this.links };
    
    console.log("Network is ", Network)
    return Network;
}); // end of define

