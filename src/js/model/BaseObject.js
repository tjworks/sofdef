define(['underscore', 'backbone'], function(underscore, Backbone){
    console.log("File loaded: BaseObject");
  
    var BaseObject =  Backbone.Model.extend( {
        initialize: function(){
          console.log("Object init: BaseObject");
          this.id = _.uniqueId('obj');
        },
        getId: function(){ return this.id; },
        setId: function(newId){ this.id = newId;},
        getName: function(){ return this.name },
        setName: function(newname){ this.name= newname },
        toString: function(){ return arguments.callee.name + this.id}
    }); //end BaseObject
    
    return BaseObject;
}); // end of define

