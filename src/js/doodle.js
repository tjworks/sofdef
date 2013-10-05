 
function parseCurrentTranslate(str){
  if(!str) return null;
  
  var m = /translate\(([0-9\.\-]+),\s*([0-9\.\-]+)\)/.exec(str);
  if(m){
    return {x: parseFloat(m[1]), y: parseFloat(m[2])}  
  }
  return null;
} 

require(['util/GraphUtil','jointjs/JointGraph', 'util/PointUtil'], function(graphutil, jgraph, pointutil){
  /**
  for(var i=1;i<8;i++){
    var link1 = new joint.dia.Link( { source:g.point(0,50*i), target:g.point(500,50*i), stroke:'blue', 'strok-width':1, '.connection':{'stroke-width':5} });
    global.graph.addCell(link1);

 
     
    var vertical = new joint.dia.Link( { source:g.point( 50*i, 0 ), target:g.point(50*i, 400), stroke:'blue', 'strok-width':1, '.connection':{'stroke-width':5} });
    global.graph.addCell(vertical);
  }
    */
  
  var link2 = new joint.dia.Link( { source:g.point(150,60), target:g.point(40,240) });
 // global.graph.addCell(link2);
  
    link3 = new joint.dia.Link( { source:g.point(300,300), target:g.point(250,250) });
   // global.graph.addCell(link3);
   /**
                 
   var intersection = graphutil.getIntersection(link1.attributes, link2.attributes)
  console.log("intersection of line1 & line2: " , graphutil.getIntersection(link1.attributes, link2.attributes));
  
  
    link4 = new joint.dia.Link( { source: g.point(intersection), target:g.point(200,400) });
    //global.graph.addCell(link4);
   
    window.rect = new joint.shapes.basic.Rect({ 
    position: { x: 100, y: 100 },
    size: { width: 70, height: 50 },
    attrs: { text: { text: 'my rectangle' } }
    })
    
    //global.graph.addCell(rect);
    
    r = rect.attributes.position
    r.w = rect.attributes.size.width;
    r.h = rect.attributes.size.height;
    
    console.log("Contained? ",  graphutil.contains(r, intersection))
    
    console.log("Contained? ",  graphutil.contains(r, {x:500, y:500}))
    */
    var cells = global.graph.attributes.cells.models;
    cells.forEach(function(cell){
        if(cell.attributes.type.indexOf("Atomic")>0){
          console.log("rect", cell);
          console.log(global.graph.getConnectedLinks(cell));
        }
        if(cell.attributes.type.indexOf("Link")>0){
          console.log("link", global.paper.findViewByModel(cell).getBBox());
        }
    });
    
    
    window.h1 = global.graph.getCell('h1');
    window.h2 = global.graph.getCell('h2');
    window.s1 = global.graph.getCell('s1');
    window.link  = global.graph.getCell('h1-eth0~s1-eth1');
    
    
    window.linkview = global.paper.findViewByModel(link);
    
    
    // get the line coords for the link
    var srcnode = link.get('source');
    window.srcPortEm =    $("g[model-id=" + srcnode.id +"] "+ srcnode.selector).parent()[0] ;
    var srcTransform = V(  $("g[model-id=" + srcnode.id +"] "+ srcnode.selector).parent()[0] ).attr('transform')
    console.log("src trans", srcTransform, parseCurrentTranslate(srcTransform))
    
    var tgtnode = link.get("target");
    var targetTransform = V(  $("g[model-id=" + tgtnode.id +"] "+ tgtnode.selector).parent()[0] ).attr('transform')
    console.log("target trans", targetTransform, parseCurrentTranslate(targetTransform))
    

    var linkLine = {}
    linkLine.source = pointutil.translate(   global.graph.getCell(srcnode.id ).get('position'), parseCurrentTranslate(srcTransform));
    linkLine.target = pointutil.translate(   global.graph.getCell(tgtnode.id ).get('position'), parseCurrentTranslate(targetTransform));
  

    var source =  global.graph.getCell(srcnode.id );
    var sourcePosition = source.get('position');
    var size = source.get('size');
     
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
              var k ="." + $(srcPortEm).attr('class');
              var attrs ={};
              
              attrs[k] = {
                   'ref-x': delta.x,
                   'ref-y': delta.y,
                   'ref':'rect'
               } 
               //h1.attr( attrs);
              //V(  $("g[model-id=" + srcnode.id +"] "+ srcnode.selector).parent()[0] )
              //h1.attr({'.port0': {'ref-x':0.1, ref:'rect'}})
              
        }
      
    };
    
    
   // global.paper.findViewByModel(link).updateEnds();
});


