;define(['model/BaseObject'], function(BaseObject){
    console.log("File loaded: Network");
    
    var Network = BaseObject.extend({
        initialize: function(){
          console.log("Object init: Network");
          this.name = "untitled";
        },
        setNodes: function(newNodes){ this.nodes = newNodes },
        getNodes: function(){ return this.nodes  },
        setLinks: function(newLinks){ this.links = newLinks },
        getLinks: function(){ return this.links }
    });  
    
    return Network;
}); // end of define

