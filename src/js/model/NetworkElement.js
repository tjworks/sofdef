define(['underscore', 'model/BaseObject'], function(underscore, BaseObject){
    console.log("File loaded: NetworkElement");
    var NetworkElement =  function(){
      this.id = _.uniqueId('nem');
      this.name = this.id;
    };
    NetworkElement.prototype = new BaseObject();
    _.extend(NetworkElement.prototype, {
      get:function(attr) { return this[attr]; },
      set:function(attr,value) { this[attr] = value;},
      getName: function(){ return this.name },
      setName: function(newname){ this.name= newname }
    })
    return NetworkElement;
}); // end of define

