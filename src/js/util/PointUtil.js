;define([ ], function( ){
    var ret = {};
    ret.getDelta = function(base, translated, size){
              console.log('base', base, 'translated', translated, 'size', size)
              var x = translated.x - base.x;
              var y = translated.y - base.y ;
              
              x = x / size.width;
             
              y = y / size.height;
              
              if(x >0.9 && x<1) x= 0.9;
              if(y>0.9  && y<1) y = 0.9;
              if(x>0 && x<0.1) x= 0.1;
              if(y<0.1 && y>0) y=0.1;
              
              if(x==1) x= 0.999;
              if(y==1) y = 0.999;
              
              
              return {  x:x, y:y }
    };
    ret.equals = function (p1, p2){
      return  p1 && p2 && p1.x === p2.x && p1.y === p2.y;
    };
    ret.translate = function(base, trans){
      if(!base) return null;
      if(!trans) return base;
      var ret  = {}
      ret.x  = parseFloat(base.x) + trans.x;
      ret.y  = parseFloat(base.y) + trans.y;
      return ret;
    };
    return ret;
}); // end require.js define()

