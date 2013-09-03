define(['underscore'], function(){
    console.log("File loaded: BaseObject");
  
    var BaseObject =  function(){
        console.log("Object init: BaseObject");
        this.id = _.uniqueId('obj');
    };
    BaseObject.prototype = {
      getId: function(){ return this.id; },
      setId: function(newId){ this.id = newId;}
    }
    
    return BaseObject;
}); // end of define

