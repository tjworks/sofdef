;define(['util/GraphUtil' ,'util/PointUtil'], function(graphutil,   pointutil){
 
     function parseCurrentTranslate(str){
      if(!str) return null;
      
      var m = /translate\(([0-9\.\-]+),\s*([0-9\.\-]+)\)/.exec(str);
      if(m){
        return {x: parseFloat(m[1]), y: parseFloat(m[2])}  
      }
      return null;
    } ;
    
    var fn = function(elementId, graph){
        
        var paper = graph.paper;      
        var jointElement = graph.getCell(elementId);
        
        var links = graph.getConnectedLinks(jointElement);
        
        var arrangePort = function(node, linkLine){
          
          var modelElement =   graph.getCell(node.id );
          var sourcePosition = modelElement.get('position');
          var size = modelElement.get('size');
          
          var portEl =    $("g[model-id=" + node.id +"] "+  node.selector).parent()[0] ;
           
          console.log("link line", linkLine)
          var intersections = [];
          var line1 = {}
          line1.source = sourcePosition;
          line1.target = {x: sourcePosition.x, y: sourcePosition.y+size.height  }
          intersection = graphutil.getIntersection(linkLine, line1);
          intersections.push(intersection);
          
          
          var line2 = {}
          line2.source = line1.target;
          line2.target = {x:line2.source.x+size.width, y : line2.source.y};
          intersection = graphutil.getIntersection(linkLine, line2);
          console.log("Line 2 intersects: ", intersection);
          intersections.push(intersection);
          
          var line3 = {}
          line3.source = line2.target;
          line3.target = {x:line3.source.x , y : line3.source.y-size.height};
          intersection = graphutil.getIntersection(linkLine, line3);
          console.log("Line 3 intersects: ", intersection);
          intersections.push(intersection);
          
           var line4 = {}
          line4.source = line3.target;
          line4.target = {x:line4.source.x-size.width , y : line4.source.y };
          intersection = graphutil.getIntersection(linkLine, line4);
          console.log("Line 4 intersects: ", intersection);
          intersections.push(intersection);
          
          for(var i=1;i<=4;i++){
              var p = intersections[i-1];
              if(!p) continue;
              if(pointutil.equals(p, linkLine.source) || pointutil.equals(p, linkLine.target)){
                console.log("link meets at line "+ i)
              }
              else{
                    console.log("link intersects with line "+ i)
                    // move the circle
                    var delta = pointutil.getDelta(sourcePosition, p, size);
                    console.log("Moving to delta", delta);
                    var k ="." + $(portEl).attr('class');
                    var attrs ={};
                    
                    attrs[k] = {
                         'ref-x': delta.x,
                         'ref-y': delta.y,
                         'ref':'rect'
                     } 
                     modelElement.attr( attrs);
                    //V(  $("g[model-id=" + srcnode.id +"] "+ srcnode.selector).parent()[0] )
                    //h1.attr({'.port0': {'ref-x':0.1, ref:'rect'}})
                    
              }
          }// end for   
        };  // end arrangePort
        
        
        var arrangeLink = function(link){
          console.log("check link", link);
          
          var srcnode = link.get('source');
          
          var srcTransform = V(  $("g[model-id=" + srcnode.id +"] "+ srcnode.selector).parent()[0] ).attr('transform')
          console.log("src trans", srcTransform, parseCurrentTranslate(srcTransform))
          
          var tgtnode = link.get("target");
          var targetTransform = V(  $("g[model-id=" + tgtnode.id +"] "+ tgtnode.selector).parent()[0] ).attr('transform')
          console.log("target trans", targetTransform, parseCurrentTranslate(targetTransform))
            
          console.log("src node  ", srcnode.id,  graph.getCell(srcnode.id ).get('position'))
          console.log("target node  ", tgtnode.id,  graph.getCell(tgtnode.id ).get('position'))
        
        
           var linkLine = {}
              linkLine.source = pointutil.translate(    graph.getCell(srcnode.id ).get('position'), parseCurrentTranslate(srcTransform));
              linkLine.target = pointutil.translate(    graph.getCell(tgtnode.id ).get('position'), parseCurrentTranslate(targetTransform));
          if(linkLine.source && linkLine.target){
            arrangePort(srcnode, linkLine);
            arrangePort(tgtnode, linkLine);
          }
                  
        };
        
        links.forEach(function(link){
            link.toBack();
            arrangeLink(link);
        });
        /**
        window.link  = global.graph.getCell('h1-eth0~s1-eth1');
         
        window.linkview = global.paper.findViewByModel(link);
        
         
    
        var linkLine = {}
        linkLine.source = pointutil.translate(   global.graph.getCell(srcnode.id ).get('position'), parseCurrentTranslate(srcTransform));
        linkLine.target = pointutil.translate(   global.graph.getCell(tgtnode.id ).get('position'), parseCurrentTranslate(targetTransform));
      
        */
   }; //end main function     
    
   return fn;
   // global.paper.findViewByModel(link).updateEnds();
});


