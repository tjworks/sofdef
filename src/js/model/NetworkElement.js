define(['underscore', 'model/BaseObject'], function(underscore, BaseObject){
    console.log("File loaded: NetworkElement");
    
    var NetworkElement =  BaseObject.extend({
      initialize: function(){
          console.log("Object init: NetworkElement");
          this.id = _.uniqueId('nem');
          this.name = this.id;
        }
      /**get:function(attr) { return this[attr]; }, // even though the generic get/set is defined here for convenience, I don't really want to encourage of its use
      set:function(attr,value) { this[attr] = value;},
      getName: function(){ return this.name || this.id},
      setName: function(newname){ this.name= newname }
      */
    })
    return NetworkElement;
}); // end of define

